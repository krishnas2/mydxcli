const myDxcliwrapper=require('./CliWrapperSpawn'),
myDXcliconstant= require('./CliConstants'),
errorhandler=require('./ErrorHandler'),
path=require('path');
module.exports=(username,metadata,destination,littlecallback)=>{
myDxcliwrapper([myDXcliconstant.forcemdapilistmetadata,'--json','-u',username,'-m',metadata,'-f',path.resolve(destination)],function(response){
    try{
        littlecallback();
    }
    catch(error){
        errorhandler(error);
    }
});
}