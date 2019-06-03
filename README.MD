# mydxcli or timesavercli

## What is this about

There is a common scenario among developers to fetch complete Profile or PermissionSet i.e with CRUD and there are couple of known ways to fetch them by generating package.xml and then retrieve based on that.

You might be searching for package.xml generators and then use it in workbench to fetch the desired profile xml. But, this module has done all these for you.You don't have search for package.xml generators or write one on your own.


## How do i install it

`npm install -g mydxcli`
if you want to use it as CLI

`npm install mydxcli`
if you want to use it in elsewhere

## Available commands

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

**NOTE: This node module aka timesaver cli as we call is dependent on SFDX CLI and would expect command to be run for an org.**

#### Search over internet to fetch sfdx cli if you don't already have it. Then authenticate the org.
