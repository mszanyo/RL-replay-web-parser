'use strict';

const { parseReplay } = require('./replay-parser/worker.js');
const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const PORT = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
});

app.use(express.json({ extended: false }));

app.post('/parse-replay', upload.single('file'), async function (req, res, next) {
	if (!req.file) return res.status(400).json('No file uploaded');
	if (req.file.mimetype !== 'application/octet-stream' || !req.file.buffer)
		return res.status(415).json('File is not a replay');
	try {
		const file = req.file;
		const parsedReplay = await parseReplay(file);
		res.send(parsedReplay);
		next();
	} catch (err) {
		res.status(500).json('Replay parsing failed');
		next();
	}
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
