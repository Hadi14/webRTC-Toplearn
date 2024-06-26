// کدهای مربوط به DOM

import * as constants from './constants.js';
import * as elements from './elements.js';


export const updatePersonalCode = (personalCode) => {
    const personalCodeParagraph = document.getElementById('personal_code_paragraph');
    personalCodeParagraph.innerHTML = personalCode;
}


export const showIncomingCallDialog = (callType,acceptCallHandler, rejectCallHandler) => {
    const callTypeInfo = constants.callType.CHAT_PERSONAL_CODE === callType ? "Chat" : "Video"
    const incomingCallDialog = elements.getIncomingCallDialog(callTypeInfo, acceptCallHandler, rejectCallHandler);

    // removing all dialogs inside HTML dialog element
    const dialog = document.getElementById('dialog');
    dialog.querySelectorAll('*').forEach((dialog) => dialog.remove());
    dialog.appendChild(incomingCallDialog);
}