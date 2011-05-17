/*
	audiolib.js
	Jussi Kalliokoski
	https://github.com/jussi-kalliokoski/audioLib.js
	MIT license
*/

/*
	wrapper-start.js
	Please note that the file is not of valid syntax when standalone.
*/

this.audioLib = (function(global, Math){

var	arrayType	= global.Float32Array || Array,
	audioLib	= this;

function Float32Array(length){
	var array = new Float32Array(length);
	array.subarray = array.subarray || array.slice;
}