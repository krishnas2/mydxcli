var metadataoperator=require('./lib/XmlCreator');
module.exports={
    runOperation:function(optionparser,mastercallback,directory){
        metadataoperator(optionparser.username,optionparser,mastercallback,directory);
    }
}