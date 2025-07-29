// include file system module
var fs = require("fs")


fs.readdir("../_webportal-ivi-reference", function rename(err, file){
   //console.log(file);
  fs.readFile("../_webportal-ivi-reference/"+file, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

