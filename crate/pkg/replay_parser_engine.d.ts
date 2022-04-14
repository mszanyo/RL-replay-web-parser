/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} data
* @returns {Replay}
*/
export function parse(data: Uint8Array): Replay;
/**
*/
export class Replay {
  free(): void;
/**
* @param {boolean} pretty
* @returns {string}
*/
  header_json(pretty: boolean): string;
}
