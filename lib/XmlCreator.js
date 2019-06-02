const async=require('async'),
getdata=require('./MdapiListMetadataHelper'),
getusername=require('./GetUsername'),
path=require("path"),fs=require('fs'),
metdataretriever=require('./MdapiRetrieve');


module.exports=(alias,vals,mastercallback,directory)=>{
    directory=directory?directory:'mydxcli';
    //console.log(vals,'gdfg');
    var username='';
    async.waterfall([
        (mightycallback)=>{
            getusername(alias,mightycallback);//Get Username
        },
        (usname,mightycallback)=>{//xmlcreator
            username=usname;
            async.parallel([
                (littlecallback)=>{//For Profile
                    console.log(vals);
                    if(vals.getProfile=="true")
                        getdata(littlecallback,usname,'Profile',path.resolve(directory+'/Profile.json'));//Profile
                    else if (vals.getProfile){
                        var plist=vals.getProfile.split(",");
                        var packageformer=['<types>','<name>'+'Profile'+'</name>'];
                        for(let i=0;i<plist.length;i++){
                                packageformer.push('<members>'+plist[i]+'</members>');
                        }
                        packageformer.push('</types>');
                        //console.log(packageformer);
                        littlecallback(null,packageformer);
                    }
                    else{
                        littlecallback(null,null);
                    }

                },
                (littlecallback)=>{//For Profile
                    if(vals.getPermissionSet=="true")
                        getdata(littlecallback,usname,'PermissionSet',path.resolve(directory+'/PermissionSet.json'));//Profile
                    else if (vals.getPermissionSet){
                        var plist=vals.getPermissionSet.split(",");
                        var packageformer=['<types>','<name>'+'PermissionSet'+'</name>'];
                        for(let i=0;i<plist.length;i++){
                                packageformer.push('<members>'+plist[i]+'</members>');
                        }
                        packageformer.push('</types>');
                        console.log(packageformer);
                        littlecallback(null,packageformer);
                    }
                    else{
                        littlecallback(null,null);
                    }

                },
                (littlecallback)=>{
                    getdata(littlecallback,usname,'ApexClass',path.resolve(directory+'/ApexClass.txt'));//ApexClass
                },
                (littlecallback)=>{
                    getdata(littlecallback,usname,'ApexPage',path.resolve(directory+'/ApexPage.txt'));//ApexClass
                },
                (littlecallback)=>{
                    getdata(littlecallback,usname,'CustomObject',path.resolve(directory+'/CustomObject.txt'));//custom object fro CRUD
                },
                 

            ],function(err,results){
                if(err){
                    console.log('Unknown Errorr : ',err);
                }
                else{
                    var xml=['<?xml version="1.0" encoding="UTF-8"?>',' <Package xmlns="http://soap.sforce.com/2006/04/metadata">'];
                    for(let i=0;i<results.length;i++){
                        if(results[i]){
                            xml=xml.concat(results[i]);
                        }
                    }
                    xml=xml.concat('<version>45.0</version>','</Package>');
                    mightycallback(null,xml.join('\n'));
                }
                    
            });
        }
    ], function (err,result) {
        if(err){
            console.info('Unhandled Error ',err);
        }
        else{
            //console.log(result);
            fs.writeFile(path.resolve(directory+"/package.xml"), result, function(err) {
                if(err) {
                    console.log(err);
                }
                console.log("Package.xml is written","MDAPI:retrieve in progress");
                metdataretriever(username,path.resolve(directory+"/package.xml"),path.resolve(directory),function(){
                    mastercallback('Files are retrieved . check here: '+path.resolve(directory));
                });
            });
        }
    });
}