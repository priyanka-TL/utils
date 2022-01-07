#!/usr/bin/ruby
# encoding: UTF-8

#
# BigBlueButton open source conferencing system - http://www.bigbluebutton.org/
#
# Copyright (c) 2012 BigBlueButton Inc. and by respective authors (see below).
#
# This program is free software; you can redistribute it and/or modify it under
# the terms of the GNU Lesser General Public License as published by the Free
# Software Foundation; either version 3.0 of the License, or (at your option)
# any later version.
#
# BigBlueButton is distributed in the hope that it will be useful, but WITHOUT
# ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
# FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
# details.
#
# You should have received a copy of the GNU Lesser General Public License along
# with BigBlueButton; if not, see <http://www.gnu.org/licenses/>.
#

require "trollop"
require File.expand_path('../../../lib/recordandplayback', __FILE__)

opts = Trollop::options do
  opt :meeting_id, "Meeting id to archive", :type => String
  opt :format, "Playback format name", :type => String
end
$meeting_id = opts[:meeting_id]

logger = Logger.new("/var/log/bigbluebutton/post_publish.log", 'weekly' )
logger.level = Logger::INFO
BigBlueButton.logger = logger

$published_files = "/var/bigbluebutton/published/presentation/#{$meeting_id}"
$meeting_metadata = BigBlueButton::Events.get_meeting_metadata("/var/bigbluebutton/recording/raw/#{$meeting_id}/events.xml")

# Script Configurations
$mp4_file = "/var/bigbluebutton/published/presentation/#{$meeting_id}/meeting.mp4"
$cloud_location = ""
$http_base_url = "https://dev.elevate-apis.shikshalokam.org/"
$cloud_storage = "AWS"

# AWS Configurations
$aws_bucket_name = '<aws-bucket-name>'
$aws_object_key = "recordings/#{$meeting_id}.mp4"
$aws_region = '<aws-bucket-region>'
$aws_access_key_id = '<aws-access-key>'
$aws_secret_access_key = '<aws-secret-access-key>'
$aws_bucket_base_url = "https://#{$aws_bucket_name}.s3.amazonaws.com/"

# GCP Configurations
$gcp_project_id = "<gcp-project-id>"
$gcp_access_file_path = "<gcp-json-file-path>"
$gcp_bucket_name = '<gcp-bucket-name>'
$gcp_object_key = "recordings/#{$meeting_id}.mp4"

# Azure Configurations
$azure_account_name = ''
$azure_account_key = ''
$azure_container_name = ''
$azure_object_key = "recordings/#{$meeting_id}.mp4"

#
# Put your code here
#

require "aws-sdk-s3"
require "google/cloud"
require "azure/storage/blob"
require "http"
require "json"

# $meeting_id = "df1dff802f35d36cc5758feb2457339ede7e3327-1640153741191"
# $mp4_file = "/var/bigbluebutton/published/presentation/#{$meeting_id}/meeting.mp4"
# $cloud_location = ""

# Decides which cloud provider to use
def selectCloudStorage
    case $cloud_storage
    when "AWS"
      prepareAwsUploading
    when "GCP"
      prepareGcpUploading
    when "AZURE"
      prepareAzureUploading
    else
      puts "Invalid cloud storage: [#{$cloud_storage}]"
      BigBlueButton.logger.info("Invalid cloud storage: [#{$cloud_storage}]")
    end
end

# Makes connectivity to AWS and read file to upload
def prepareAwsUploading
  credentials = Aws::Credentials.new($aws_access_key_id,$aws_secret_access_key)
  s3_client = Aws::S3::Client.new(region: $aws_region, credentials: credentials)
  body = File.open($mp4_file)

  if uploadToAwsCloud?(s3_client, $aws_bucket_name, $aws_object_key, body)
    puts "Object '#{$aws_object_key}' uploaded to bucket '#{$aws_bucket_name}'."
    BigBlueButton.logger.info("Object '#{$aws_object_key}' uploaded to bucket '#{$aws_bucket_name}'.")
    puts "File should be available at #{$aws_bucket_base_url}#{$aws_object_key}"
    BigBlueButton.logger.info("File should be available at #{$aws_bucket_base_url}#{$aws_object_key}")
    $cloud_location = $aws_object_key
  else
    puts "Object '#{$aws_object_key}' not uploaded to bucket '#{$aws_bucket_name}'."
    BigBlueButton.logger.info("Object '#{$aws_object_key}' not uploaded to bucket '#{$aws_bucket_name}'.")
  end  
end  

# Upload to AWS
def uploadToAwsCloud?(s3_client, aws_bucket_name, aws_object_key, body)
    response = s3_client.put_object(
      bucket: aws_bucket_name,
      key: aws_object_key,
      body: body
    )
    if response.etag
      return true
    else
      return false
    end
  rescue StandardError => e
    puts "Error uploading object: #{e.message} for meeting Id [#{$meeting_id}]"
    BigBlueButton.logger.info("Error uploading object: #{e.message} for meeting Id [#{$meeting_id}]")
    return false
end

# Makes connectivity to GCP and read file to upload
def prepareGcpUploading
  gcloud = Google::Cloud.new $gcp_project_id, $gcp_access_file_path

  storage = gcloud.storage

  begin
    bucket = storage.bucket $gcp_bucket_name
  rescue StandardError => e
    puts "Error accessing bucket: #{e.message}"
    bucket = storage.create_bucket $gcp_bucket_name
  else
    #... executes when no error
  ensure
    # Upload the file
    file = bucket.create_file $mp4_file, $gcp_object_key
    puts "File should be available at - #{file.public_url}"
    BigBlueButton.logger.info("File should be available at - #{file.public_url}")
    $cloud_location = $gcp_object_key
  end
end

# Makes connectivity to AZURE and read file to upload
def prepareAzureUploading
  client = Azure::Storage::Blob::BlobService.create(storage_account_name: $azure_account_name, storage_access_key: $azure_account_key)

  container = client.create_container $azure_container_name

  # Upload the file
  content = ::File.open($mp4_file, "rb") { |file| file.read }
  client.create_block_blob(container.name, $azure_object_key, content)
  puts "File successfully uploaded to azure container - #{$azure_container_name}"
  BigBlueButton.logger.info("File successfully uploaded to azure container - #{$azure_container_name}")
  $cloud_location = $azure_object_key
end

# Update cloud storage recording url in session
def updateSessionRecordingUrl(internalMeetingId, recordingUrl)
    response = HTTP.post("#{$http_base_url}mentoring/v1/sessions/updateRecordingUrl/#{internalMeetingId}", :form => {'recordingUrl' => recordingUrl})
    response = JSON.parse(response) # parsed the json object to generate ruby hash
    if response['responseCode'] == 'OK'
        puts "Recording url updated on session for meeting Id [#{internalMeetingId}]"
        BigBlueButton.logger.info("Recording url updated on session for meeting Id [#{internalMeetingId}]")
    else
        puts "Error while updating recording url: '#{response['message']}' : for meeting Id [#{internalMeetingId}]"
        BigBlueButton.logger.info("Error while updating recording url: '#{response['message']}' : for meeting Id [#{internalMeetingId}]")
    end
end

# Delete all recording data along with mp4 file from BBB server
def deleteRecordingData(internalMeetingId)
  BigBlueButton.logger.info("Recording deletion begins for meeting id [#{internalMeetingId}]")
  system("bbb-record --delete #{internalMeetingId}") # executes command in sub shell
  puts "Recording deleted successfully for meeting Id [#{internalMeetingId}]"
  BigBlueButton.logger.info("Recording deletion ends for meeting id [#{internalMeetingId}]")
end
  
selectCloudStorage # calls to selectCloudStorage method

updateSessionRecordingUrl($meeting_id, $cloud_location)

deleteRecordingData($meeting_id)