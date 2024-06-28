// برای ارسال درخواستها و ...از این فایل استفاده میشود
import * as wss from './wss.js';
import * as ui from './ui.js';
// import * as constants from './constants.js';
// import * as store from './store.js';


let connectedUserDetails;
// let peerConnection;
// let dataChannel;


export const sendPreOffer = (callType, calleePersonalCode) => {
    console.log("EXEC");
    console.log(callType, calleePersonalCode);
    const data = {
        callType,
        calleePersonalCode
    }

    // connectedUserDetails = {
    //        callType,
    //        socketId : calleePersonalCode
    // }

    // if(callType === constants.callType.CHAT_PERSONAL_CODE ||
    //    callType === constants.callType.VIDEO_PERSONAL_CODE){

    //        ui.showCallingDialog(callingDialogRejectCallHandler);
    //        store.setCallState(constants.callState.CALL_UNAVAILABLE);
    //        wss.sendPreOffer(data);
    // }

    // if(callType === constants.callType.CHAT_STRANGER ||
    //    callType === constants.callType.VIDEO_STRANGER){

    //        store.setCallState(constants.callState.CALL_UNAVAILABLE);
    wss.sendPreOffer(data);
    //    }
}
export const handlePreOffer = (data) => {
    console.log(data);
    const { callType, callerSocketId } = data;

    connectedUserDetails = {
        socketId: callerSocketId,
        callType
    }
    ui.showIncomingCallDialog(callType, acceptCallHandler, rejectCallHandler);

}


const acceptCallHandler = ()=>{
       console.log('call accepted');
    //    createPeerConnection();
    //    sendPreOfferAnswer(constants.preOfferAnswer.CALL_ACCEPTED);
    //    ui.showCallElements(connectedUserDetails.callType);
}

const rejectCallHandler = ()=>{
       console.log('call rejected');
    //    setIncomingCallsAvailable();
    //    sendPreOfferAnswer(constants.preOfferAnswer.CALL_REJECTED);
}
