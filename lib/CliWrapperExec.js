const myDXcliconstant= require('./CliConstants'), cp = require("child_process"),
errorhandler=require('./ErrorHandler');

module.exports=(commandlist,callback)=>{
    cp.exec(myDXcliconstant.sfdx.concat(commandlist).join(' '),myDXcliconstant.buffer, (error, stdout, stderr) => {
        try{
            if(error || stderr){
                console.error('error ',error,stderr);
            }
            else{
                callback(stdout);
            }
        }
        catch(error){
            errorhandler(error);
        }
    });
}