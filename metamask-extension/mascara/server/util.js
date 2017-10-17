const browserify = require('browserify')
const watchify = require('watchify')

const onMetaMaskLoad = require('../../../src/app');

module.exports = {
  serveBundle,
  createBundle,
}


function serveBundle(server, path, bundle){
  server.get(path, function(req, res){
    res.setHeader('Content-Type', 'application/javascript; charset=UTF-8')
    res.send(bundle.latest)
  })
}

function createBundle(entryPoint){

  var bundleContainer = {}

  var bundler = browserify({
    entries: [entryPoint],
    cache: {},
    packageCache: {},
    plugin: [watchify],
  })

  bundler.on('update', bundle)
  bundle()

  return bundleContainer

  function bundle() {
    bundler.bundle(function(err, result){
      if (err) {
        console.log(`Bundle failed! (${entryPoint})`)
        console.error(err)
        return
      }

      let path_arr = entryPoint.split("/");
      console.log(`Bundle updated! (${entryPoint})`);

      // Is used to check if MetaMask is up and running
      if (path_arr[path_arr.length-1].toString() === "ui.js"){
          console.log("MetaMask Started!");
          onMetaMaskLoad();
      }

      bundleContainer.latest = result.toString()
    })
  }

}
