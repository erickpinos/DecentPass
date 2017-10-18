// onMetaMaskLoad is exported and called in a serverBundle function under metamask-extension/mascara/server/util.js
// Its a hacky way to figure out when the MetaMask (Mascara) server is up and running

let events = require('events');

module.exports = onMetaMaskLoad;

let eventEmitter = new events.EventEmitter();


eventEmitter.on("EVENT", function () {

    //Code runs when MetaMask starts running.

    let btn = document.getElementById("start_meta");
    btn.style.backgroundColor = "#0A5448"

    initMetaMaskOnLoad();

});


// MetaMask needs to run the first time to be initialized.
function initMetaMaskOnLoad(){
    let iframe = document.getElementById("metamask");
    iframe.src = "http://localhost:9001"
}


function onMetaMaskLoad(){
    eventEmitter.emit("EVENT");
}

