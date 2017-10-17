let events = require('events');

module.exports = onMetaMaskLoad;

let eventEmmiter = new events.EventEmitter();


eventEmmiter.on("EVENT", function () {

    //What to do when you find metamask to be runnign

    // let btn = document.getElementById("start_meta");
    // btn.style.backgroundColor = "#0A5448"
    //
    // initMetaMaskOnLoad();
});


function initMetaMaskOnLoad(){
    let iframe = document.getElementById("metamask");
    iframe.src = "http://localhost:9001"
}


function onMetaMaskLoad(){
    eventEmmiter.emit("EVENT");
}

