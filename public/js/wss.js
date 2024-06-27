//کدهای مروبط به ساکت در  این فایل قرار میگیرد

import * as store from './store.js';
import * as ui from './ui.js';
import * as webRTCHandler from './webRTCHandler.js';
import * as constants from './constants.js';
import * as strangerUtils from './strangerUtils.js';
let socketIO = null;
export const registerSocketEvents = (socket) => {
    socket.on("connect", () => {
        console.log("CLIENT: successfuly connected.");
        console.log(socket.id);
        socketIO = socket;
        // store.setSocketId(socket.id);
        // console.log(store.getState().socketId);
        ui.updatePersonalCode(socket.id);
    })
    socket.on('pre-offer', (data) => {
        webRTCHandler.handlePreOffer(data);

    });

}

export const sendPreOffer = (data) => {
    socketIO.emit('pre-offer', data);
}

export const handlePreOffer = (data) => {
    // const { callType, callerSocketId } = data;
    // if (!checkCallPossibility(callType)) {
    //     return sendPreOfferAnswer(constants.preOfferAnswer.CALL_UNAVAILABLE, callerSocketId);
    // }
    // store.setCallState(constants.callState.CALL_UNAVAILABLE);
    // connectedUserDetails = {
    //     socketId: callerSocketId,
    //     callType
    // }

    // if (callType === constants.callType.CHAT_PERSONAL_CODE ||
    //     callType === constants.callType.VIDEO_PERSONAL_CODE) {
    //     ui.showIncomingCallDialog(callType, acceptCallHandler, rejectCallHandler);
    // }

    // if (callType === constants.callType.CHAT_STRANGER ||
    //     callType === constants.callType.VIDEO_STRANGER) {
    //     createPeerConnection();
    //     sendPreOfferAnswer(constants.preOfferAnswer.CALL_ACCEPTED);
    //     ui.showCallElements(connectedUserDetails.callType);
    // }
}
