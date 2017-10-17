
let contract = require('truffle-contract');
const createMetamascaraServer = require('../metamask-extension/mascara/server/');
let events = require('events');

let MetaCoin = contract('truffle/build/contracts/MetaCoin.json');
let PassManager = contract('truffle/build/contracts/PassManager.json');

let Web3 = require('web3');

let web3 = new Web3(Web3.givenProvider);

//console.log(web3);

module.exports = onMetaMaskLoad;

let add_one = "0xeca632bfe0ed5f01c1e93f70e267e3348d60f361";
let add_two = "0xe092a647fb292cc9e04c8634fc0cd8750d45671d";

function getMyBalance(){

    web3.eth.getBalance(add_one, function(error, result){
        if(!error){

            let ether = web3.utils.fromWei(result, "ether");
            //ether = ether.toNumber();
            console.log(parseInt(ether));
        }else{
            console.log("shit went down");
            console.log(error);
        }
    });

}

getMyBalance();

function sendMyEthereum(){

    web3.eth.sendTransaction({from: add_two, to: add_one,
                            value: web3.utils.toWei(12)}, function (error, result){

        if(!error){
            console.log(result);
            getMyBalance()
        }else{
            console.log(error);
        }

    });

}

//sendEthereum();


function startMetaMask(){

    const mascaraServer = createMetamascaraServer()

    const mascaraPort = 9001
    mascaraServer.listen(mascaraPort)
    console.log(`Mascara service listening on port ${mascaraPort}`)


}

// window.addEventListener('load', loadProvider)
// window.addEventListener('message', console.warn)

// async function loadProvider() {
//     console.log("THIS MAY BE WORKING!");
//          mainWindow.loadURL(url.format({
//          pathname: 'localhost:9001',
//          protocol: 'http:',
//          slashes: true
//      }));
// }
//startMetaMask();

let eventEmmiter = new events.EventEmitter();


eventEmmiter.on("EVENT", function () {
   console.log("WTFWTFWTF!!!");

   //What to do when you find metamask to be runnign

    let btn = document.getElementById("start_meta");
    btn.style.backgroundColor = "#0A5448"

    initMetaMaskOnLoad();
});


function initMetaMaskOnLoad(){
    let iframe = document.getElementById("metamask");
    iframe.src = "http://localhost:9001"
}


function onMetaMaskLoad(){
    eventEmmiter.emit("EVENT");
    console.log("TTTTHHIISS MAT NEREWRWE")
}

