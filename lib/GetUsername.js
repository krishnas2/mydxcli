const myDxcliwrapper=require('./CliWrapperExec'),
myDXcliconstant= require('./CliConstants'),
errorhandler=require('./ErrorHandler');

module.exports=(username,mightycallback)=>{
    
    myDxcliwrapper([myDXcliconstant.forceorgdisplay,'--json','-u',username],function(response){
        try{
            mightycallback(null,JSON.parse(response).result.username);
        }
        catch(error){
            errorhandler(error);
        }
        finally{
            console.log('Output was ',response);
        }
    });
}