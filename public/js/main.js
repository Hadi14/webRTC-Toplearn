import * as store from './store.js';
import * as wss from './wss.js';
import * as webRTChandler from './webRTCHandler.js';
import * as constants from './constants.js';
import * as ui from './ui.js';
import * as recordingUtils from './recordingUtils.js';
import * as strangerUtils from './strangerUtils.js';

// initialization of socketIO connection
const socket = io('/');
wss.registerSocketEvents(socket);


// register event listener for personal code copy button
const personalCodeCopyButton = document.getElementById('personal_code_copy_button');
personalCodeCopyButton.addEventListener('click', () => {
    const personalCode = store.getState().socketId;
    navigator.clipboard && navigator.clipboard.writeText(personalCode);
});


// register event listeners for connections buttons
const personalCodeChatButton = document.getElementById("personal_code_chat_button");
const personalCodeVideoButton = document.getElementById("personal_code_video_button");

personalCodeChatButton.addEventListener('click', ()=>{
    const calleePersonalCode = document.getElementById('personal_code_input').value;
    const callType = constants.callType.CHAT_PERSONAL_CODE;
    webRTChandler.sendPreOffer(callType, calleePersonalCode);
    console.log('chat button clicked ..');
});

personalCodeVideoButton.addEventListener('click', ()=>{
    const calleePersonalCode = document.getElementById('personal_code_input').value;
    const callType = constants.callType.VIDEO_PERSONAL_CODE;
    webRTChandler.sendPreOffer(callType, calleePersonalCode);
    console.log('video button clicked ..');
});