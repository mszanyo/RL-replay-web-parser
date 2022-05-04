const { wasm } = require('replay_parser_engine');
const { ReplayParser } = require('./ReplayParser');

let parser = null;

function initialize() {
	return (parser = new ReplayParser(wasm));
}

async function parseReplay(file) {
	const parser = await initialize();
	const data = new Uint8Array(file.buffer);
	const out = await parser.parse(data);

	return out;
}

exports.parseReplay = parseReplay;
