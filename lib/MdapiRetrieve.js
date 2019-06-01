const myDxcliwrapper=require('./CliWrapperSpawn'),
myDXcliconstant= require('./CliConstants'),
errorhandler=require('./ErrorHandler'),
path=require('path');

module.exports=(username,packagexml,destination,justanothercallback)=>{
myDxcliwrapper([myDXcliconstant.forcemdapiretrieve,'--json','-u',username,'-k',packagexml,'-r',path.resolve(destination)],function(response){
    try{
        justanothercallback();
    }
    catch(error){
        errorhandler(error);
    }
});
}