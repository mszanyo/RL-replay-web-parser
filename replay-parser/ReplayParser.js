const { Replay, parse } = require('replay_parser_engine');

class ReplayParser {
	constructor(mod) {
		this.mod = mod;
		this.replay = Replay;
	}

	parse(data) {
		this.replay = parse(data);

		return {
			replay: JSON.parse(this.replay.header_json(false)),
			// networkErr: this.replay.network_err() ?? null,
		};
	}

	replayJson({ pretty }) {
		if (this.replay === undefined) {
			throw new Error('replay must be defined');
		}
		return this.replay.full_json(pretty);
	}
}

exports.ReplayParser = ReplayParser;
