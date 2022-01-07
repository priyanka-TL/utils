# Ruby Script To Process Recordings
These files will process the raw recordings to generate mp4 file and then upload it to the cloud storage, after successfull upload update the cloud access location in respective session and then deletes its complete data from BBB server

## PreRequisite
<ul>
    <li>
        You must have all type of required credentials of AWS/GCP/AZURE cloud storage while calling upload methods from upload.rb file
    </li>
    <li>
        You must have presentation.rb, interval_tree.rb and upload.rb files in there respective locations
    </li>
    <li>
        You must have script configurations defined in upload.rb
    </li>
</ul>    


## Installation Ruby Packages

```
sudo gem install http
sudo gem install aws-sdk-s3
sudo gem install google-cloud-storage
sudo gem install azure-storage-blob
```

## Ruby files locations
```
* Place the file presentation.rb in the /usr/local/bigbluebutton/core/scripts/post_publish directory with executable rights.
* Place the file upload.rb in the /usr/local/bigbluebutton/core/scripts/post_publish directory with executable rights.
* Place the file interval_tree.rb in the /usr/local/bigbluebutton/core/lib/recordandplayback directory with executable rights.
```

## Description
After a session is over and the presentation is processed, the script will begin to export the recording as a single video file. It can be accessed in location "/var/bigbluebutton/published/presentation/<internal_meeting_id>/meeting.mp4" if upload.rb file is not there to execute else it will upload the file to storage and deletes the data.

Existing recordings can be re-rendered by running the script on an individual basis:
```
    bbb-record --rebuild <meeting_id>
```

### For more detail visit :
https://github.com/danielpetri1/bbb-recording-exporter

https://docs.bigbluebutton.org

https://docs.bigbluebutton.org/dev/recording.html

## Logs
Logs can be found in the location /var/log/bigbluebutton/post_publish.log

## Troubleshooting
Exports don't start after the meeting ends: /var/log/bigbluebutton/post_publish.log and /var/bigbluebutton/published/video/ must be chowned to bigbluebutton:bigbluebutton