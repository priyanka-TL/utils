const mongoose = require('mongoose');

exports.check = async (url) => {
	try {
		const db = mongoose.createConnection(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 3000
		});

		return await new Promise((resolve) => {
			db.once('open', () => {
				db.close();
				resolve(true);
			});
			db.on('error', () => {
				resolve(false);
			});
		});
	} catch {
		return false;
	}
};
