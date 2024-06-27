import * as store from './store.js';
import * as wss from './wss.js';
import * as webRTChandler from './webRTCHandler.js';
import * as constants from './constants.js';
import * as ui from './ui.js';
import * as recordingUtils from './recordingUtils.js';
import * as strangerUtils from './strangerUtils.js';


const socket = io('/');

wss.registerSocketEvents(socket);