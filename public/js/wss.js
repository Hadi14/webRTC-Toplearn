//کدهای مروبط به ساکت در  این فایل قرار میگیرد

import * as store from './store.js';
import * as wss from './wss.js';
import * as ui from './ui.js';
import * as webRTCHandler from './webRTCHandler.js';
import * as constants from './constants.js';
import * as strangerUtils from './strangerUtils.js';

export const registerSocketEvents = (socket) => {
    socket.on("connect", () => {
        console.log("CLIENT: successfuly connected.");
        console.log(socket.id);
        // store.setSocketId(socket.id);
        // console.log(store.getState().socketId);
        ui.updatePersonalCode(socket.id);
    })
}

