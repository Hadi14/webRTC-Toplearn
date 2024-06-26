import * as constants from './constants.js';

let state = {
    socketId : null,
    localStream : null,
    remoteStream : null,
    screenSharingStream : null,
    allowConnectionsFromStranger : false,
    screenSharingActive : false,
    callState : constants.callState.CALL_AVAILABLE_ONLY_CHAT
}

