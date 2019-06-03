# mydxcli or timesavercli

## Some common scenarios
i want complete profile xml
i want full profile salesforce org
i want complete permissionset
i want to get profile with CRUD

If you find yourself leaning to something similar to above mentioned scenarios.Then is a light weight cli module helps you.

## What is this about

There is a common scenario among developers to fetch complete Profile or PermissionSet i.e with CRUD and there are couple of known ways to fetch them by generating package.xml and then retrieve based on that.

You might be searching for package.xml generators and then use it in workbench to fetch the desired profile xml. But, this module has done all these for you.You don't have search for package.xml generators or write one on your own.



## How do i install it

`npm install -g mydxcli`
if you want to use it as CLI

`npm install mydxcli`
if you want to use it in elsewhere

Type below command

`mydxcli --help`

## Available commands for CLI

```
mydxcli -u Myusername -getProfile "Profile1,Profile2" --getPermissionSet "PS1,PS2"

--username or -u : You org's username or alias name
Required

--getProfile or -gP : Specify profile names you want to retrieve
optional : if value is not specified , it will fetch all profiles in org

--getPermissionSet or -gPs : Specify PermissionSet names you want to retrieve
optional : if value is not specified , it will fetch all PermissionSets in org

--directory -d : The Directory where you want to retrieve the files
if not specified default folder will be mydxcli

--help // Fetches available options
```

## Is there any way to use it through code

Yes, We considered that. Here is an Example

```
var mydxcli=require('mydxcli');
var nopt = require("nopt"),
  knownOpts = { "username" : [String],
                "getProfile":[String,Boolean],
				"getPermissionSet":[String,Boolean],
                "help":[Boolean],
				"directory":[String],
                },
  shortHands = { "u" : ["--username"],
                "gP" :["--getProfile"],
				"gPs":["--getPermissionSet"],
                "h":["--help"],
				"d":["--directory"],
            },
helper="\n-u or --username\t<username or alias name>\n\n-gP or --getProfile\t<Profilename> if not mentioned all profile will be taken by default.for mutiple profiles enter them seperate by comma(,)",
optionparser = nopt(knownOpts, shortHands, process.argv, 2);
		mydxcli.runOperation(optionparser,function(cb){
			console.log('Reached Final Callback from module,Files are retrieved. Exiting from code',cb);
			process.exit(1);
			
		},path.resolve(optionparser.directory));
		
/*
Syntax: mydxcli.runOperation(optionparser, callback,directory)

optionparser expects argument  in object format. Ex: {'username':'myusername','getProfile':'profiel1,profile2'}
kind of parsed cmd line arguments as above. in this exampel i used **nopt** the option parser and would recommend using it.
*/
```

**NOTE: This node module aka timesaver cli as we call is dependent on SFDX CLI and would expect command to be run for an org.**

#### Search over internet to fetch sfdx cli if you don't already have it. Then authenticate the org.
