import * as store from './store.js';

let mediaRecorder;

const vp9Codec = 'video/webm; codecs=vp=9';
const vp9Option = {mimeType : vp9Codec};

const recordedChunks = [];
