const fs = require('fs');
const path = require('path');
const { wasm } = require('replay_parser_engine');
const { ReplayParser } = require('./ReplayParser');

const replayFile = 'replays/replay.replay';
let parser = null;

function initialize() {
	return (parser = new ReplayParser(wasm));
}

async function parseReplay(file) {
	// const parser = await initialize();
	// // const buffer = await fs.readFileSync(file.buffer);
	// // const data = new Uint8Array(await file.buffer);
	// //build uinarray from file
	// const out = await parser.parse(data);
	// console.log(out.replay.properties);
	// console.log('parsed!');
	// return out;
}

exports.parseReplay = parseReplay;
