#!/usr/bin/env node
 var mydxcli=require('./mydxcli');

 function error(result) {
    process.exitCode = 1;
    if(result)
    console.log(result);
}
function success(result) {
    console.log(result);
}
 new mydxcli().respondtocli(success,error);