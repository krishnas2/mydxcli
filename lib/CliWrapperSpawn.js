const myDXcliconstant= require('./CliConstants'), cp = require("child_process"),
errorhandler=require('./ErrorHandler');

module.exports=(commandlist,callback)=>{
    var spawnned = cp.spawn(myDXcliconstant.sfdx.concat(commandlist).join(' '),[],{ shell: true});
    spawnned.stdout.on('data', function (data) {
        //console.log('stdout: ' + data);
      });
      
      spawnned.stderr.on('data', function (data) {
        errorhandler(data);
      });
      
      spawnned.on('close', function (code) {
          //console.log(`child process exited with code ${code}`);
          callback();
      });
}