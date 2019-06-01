var nopt = require("nopt"),
 path = require("path"),
 metadataoperator=require('./lib/XmlCreator'),
 knownOpts = { "username" : [String],
 "getProfile":[String,Boolean],
 "getPermissionSet":[String,Boolean],
 "help":[Boolean],
 "directory":[String],
 "ignore":[String]
 },
shortHands = { "u" : ["--username"],
 "gP" :["--getProfile"],
 "gPs":["--getPermissionSet"],
 "h":["--help"],
 "d":["--directory"],
 "ig":["--ignore"]
},
helper="\n-u or --username\t<username or alias name>\n\n-gP or --getProfile\t<Profilename> if not mentioned all profile will be taken by default.for mutiple profiles enter them seperate by comma(,)";
 

mydxcli = module.exports = function () {

    this.basedirectory = process.env.PWD;
    
    if (!this.basedirectory) {
        this.basedirectory = process.cwd();
    }

    return this;
}
mydxcli.prototype.respondtocli=function(successcallback,errorcallback){
    var parent=this;
    optionparser = nopt(knownOpts, shortHands, process.argv, 2);
    console.log(optionparser,optionparser.help,optionparser.username);
    if(optionparser.help){
        successcallback(helper);
    }
    else if(!optionparser.username){
        errorcallback("Mention the operation you want . Type --help for details ,usernamenot found");
    }
    else if (optionparser.getProfile || optionparser.getPermissionSet){
    metadataoperator(optionparser.username,optionparser,successcallback,optionparser.directory?path.resolve(optionparser.directory):null);
    }
    else{
        errorcallback("Mention the operation you want . Type --help for details");
    }

}