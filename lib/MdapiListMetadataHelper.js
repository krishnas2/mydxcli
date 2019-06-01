const MdapiListMetadata=require('./MdapiListMetadata'),fs=require('fs'),path=require('path'),
errorhandler=require('./ErrorHandler');
module.exports=(mightycallback,username,metadata,destination)=>{
    MdapiListMetadata(username,metadata,destination,function(){
        fs.readFile(path.resolve(destination), 'utf-8', function (err, data){
            try{
                if(err)
                console.log("Some Error in reading file: ",err);
                else{
                    var packageformer=['<types>','<name>'+metadata+'</name>'];
                   var res=JSON.parse(data);
                   for(let i=0;i<res.length;i++){
                        packageformer.push('<members>'+res[i]["fullName"]+'</members>');
                   }
                   packageformer.push('</types>');
                   mightycallback(null,packageformer);
                }
            }
            catch(error){
                errorhandler(error);
            }
        });
    });
}