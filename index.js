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

//test igen
app.post('/parse-replay', upload.single('file'), async function (req, res, next) {
	const file = req.file;
	// console.log('The Files', file);
	const parsedReplay = await parseReplay(file);
	res.json({ parsedReplay });
	// res.send('Hello!');
	next();
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
