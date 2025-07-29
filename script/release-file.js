// include file system module
var fs = require("fs")

// include fetch module
const fetch = require('node-fetch');

//url list of release
var listReleaseUrl = 'https://github.psa-cloud.com/api/v3/repos/mph00/Spec/releases';

//name of changelog file 
var changelogFileNameB2B = "b2b-7-Changelog.md"
var changelogFileNameB2C = "b2c-7-Changelog.md"

//path changelog
var changeLogFilePath = "../webapi/";

//path spec file api
var specFilePath = "../assets/openapi/";

//path spec file
var webhookTemplateFilePath = "../assets/openapi/";

//Base64 <RPI>:<pswd>
var base64LogingPassword;

//basiAuth header for GitHub
var githubAuthorizationHeaderBasicAuth;

// -------- ASK AUTHENTICATION IN GITHUB ---------

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Please type you Base64 encoded "<RPI-login>:<password>", then press Enter. ', function(data) {
    console.log(`${data}`);
    console.log('Trying to connect with your Base64 login: ' + data + '...');
    base64LogingPassword = data;
    githubAuthorizationHeaderBasicAuth = 'Basic '+ base64LogingPassword;
    console.log(githubAuthorizationHeaderBasicAuth)
    rl.close();
    fetchReleaseList();

});

// -------- END of ASK AUTHENTICATION IN GITHUB ---------

//fetch api github release list mph00
function fetchReleaseList() {
    fetch(listReleaseUrl, {  headers: {"Authorization": githubAuthorizationHeaderBasicAuth } })
    .then(response => { return response.json() })
    .then(json => processReleaseList(json))
    .catch(err => { console.error(err) })
}

//process release list
function processReleaseList(json) {

    //-----------------------
    // constructChangelogFile
    //-----------------------

    console.log("[" + changelogFileNameB2B + "] Download release list file from: " + listReleaseUrl)
    console.log("[" + changelogFileNameB2C + "] Download release list file from: " + listReleaseUrl)

    //1.0 list of release

    //1.1    document structure

    //1.1 front matter
    var changelogFrontmatterB2B = "---" + "\r\n" + "layout: doc-article" + "\r\n" + "permalink: /webapi/b2b/api-reference/changelog/" + "\r\n" + "section: webapi" + "\r\n" + "subsection: b2b" + "categorie: API Reference" + "\r\n" + "redirect_from: /webapi/b2b/changelog/" +  "\r\n" + "title: Changelog" + "\r\n" + "---" + "\r\n";
    var changelogFrontmatterB2C = "---" + "\r\n" + "layout: doc-article" + "\r\n" + "permalink: /webapi/b2c/api-reference/changelog/" + "\r\n" + "section: webapi" + "\r\n" + "subsection: b2c" + "categorie: API Reference" + "\r\n" + "redirect_from: /webapi/b2c/changelog/" +  "\r\n" + "title: Changelog" + "\r\n" + "---" + "\r\n";

    //1.1.2 release list
    var changelogListB2B = "\r\n" + "\r\n" + "Version|Name\r\n-|-\r\n";
    var changelogListB2C = "\r\n" + "\r\n" + "Version|Name\r\n-|-\r\n";

    //1.1.3 content
    var changelogContentB2B = "\r\n" + "<hr>" + "\r\n" + "\r\n";
    var changelogContentB2C = "\r\n" + "<hr>" + "\r\n" + "\r\n";

    //1.1.4 title name
    var changelogContentTitleNameB2B;
    var changelogContentTitleNameB2C;
    //1.1.5 publish date
    var changelogPublishDateB2B;
    var changelogPublishDateB2C;
    //1.2 set release identifier 
    var lastReleaseIdB2B = 0;
    var lastReleaseIdB2C = 0;

    //1.3 last release tag
    var lastB2CTagName;
    var lastB2BTagName;

    json.forEach(release => {
        //2.1 construct content 
        if (release.tag_name.includes("b2b") & !release.draft & !release.prerelease & !release.tag_name.includes("cvmp")) {

            changelogContentTitleNameB2B = release.tag_name;

            //content title
            changelogContentB2B = changelogContentB2B + "## " + release.tag_name + "\r\n";

            //publish at: date
            if (release.published_at) {
                changelogPublishDateB2B = new Date(release.published_at);
                changelogContentB2B += '\r\n<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">' + changelogPublishDateB2B.toDateString() + '</span></div>\r\n\r\n'
            }

            // content body + formating  (no h2, hr at end)
            if (release.name == "") {
                changelogContentB2B = changelogContentB2B + release.body.replace(/^\#/mg, "\r\n###").replace(/---/, "") + "\r\n" + "\r\n" + "<hr>" + "\r\n" + "\r\n";
            }
            else{
                changelogContentB2B = changelogContentB2B + "\r\n#### `" + release.name + "`\r\n" + release.body.replace(/^\#/mg, "\r\n###").replace(/---/, "") + "\r\n" + "\r\n" + "<hr>" + "\r\n" + "\r\n";
            }

            //list link (because of Anchor heading ; links need to be without Maj // space replaced with '-' // '.' deleted )
            changelogListB2B = changelogListB2B + "[" + release.tag_name + "](#" + changelogContentTitleNameB2B.toLowerCase().replace(/ /g, "-").replace(/[\./()]/g, "") + ") | " + release.name + "\r\n";

            //trace
            console.log("[" + changelogFileNameB2B + "] Add Release: " + release.tag_name)

            //2.2 if current release is the last one set it id
            if (release.id > lastReleaseIdB2B) {
                lastReleaseIdB2B = release.id;
                lastB2BTagName = release.tag_name;

            }
        }

        if (release.tag_name.includes("b2c") & !release.draft & !release.prerelease & !release.tag_name.includes("cvmp") || release.name.includes("APIs BtoC release") & !release.draft & !release.prerelease & !release.tag_name.includes("cvmp")) {

            changelogContentTitleNameB2C = release.tag_name;

            //content title
            changelogContentB2C = changelogContentB2C + "## " + release.tag_name + "\r\n";

            //publish at: date
            if (release.published_at) {
                changelogPublishDateB2C = new Date(release.published_at);
                changelogContentB2C += '\r\n<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">' + changelogPublishDateB2C.toDateString() + '</span></div>\r\n\r\n'
            }

            // content body + formating  (no h2, hr at end)
            if (release.name == "") {
                changelogContentB2C = changelogContentB2C + release.body.replace(/^\#/mg, "\r\n###").replace(/---/, "") + "\r\n" + "\r\n" + "<hr>" + "\r\n" + "\r\n";
            }
            else{
                changelogContentB2C = changelogContentB2C + "\r\n#### `" + release.name + "`\r\n" + release.body.replace(/^\#/mg, "\r\n###").replace(/---/, "") + "\r\n" + "\r\n" + "<hr>" + "\r\n" + "\r\n";
            }

            changelogContentB2C = changelogContentB2C + release.body.replace(/^\#/mg, "\r\n###").replace(/---/, "") + "\r\n" + "\r\n" + "<hr>" + "\r\n" + "\r\n";

            //list link (because of Anchor heading ; links need to be without Maj // space replaced with '-' // '.' deleted )
            changelogListB2C = changelogListB2C + "[" + release.tag_name + "](#" + changelogContentTitleNameB2C.toLowerCase().replace(/ /g, "-").replace(/[\./()]/g, "") + ") | " + release.name + "\r\n";

            //trace
            console.log("[" + changelogFileNameB2C + "] Add Release: " + release.tag_name)


            //2.2 if current release is the last one set it id
            if (release.id > lastReleaseIdB2C) {
                lastReleaseIdB2C = release.id;
                lastB2CTagName = release.tag_name;

            }
        }
    })

    //3.1 construct document
    var changelogFileB2B = changelogFrontmatterB2B + changelogListB2B + changelogContentB2B;
    var changelogFileB2C = changelogFrontmatterB2C + changelogListB2C + changelogContentB2C;

    //3.2  save markdown file containing list
    fs.writeFile(changeLogFilePath + changelogFileNameB2B, changelogFileB2B,
        // callback function that is called after writing file is done
        function (err) {
            if (err) throw err;
            //if no error
            console.log("[" + changelogFileNameB2B + "] Save file in: " + __dirname + "/" + specFilePath)
        });

    fs.writeFile(changeLogFilePath + changelogFileNameB2C, changelogFileB2C,
        // callback function that is called after writing file is done
        function (err) {
            if (err) throw err;
            //if no error
            console.log("[" + changelogFileNameB2C + "] Save file in: " + __dirname + "/" + specFilePath)
        });

    //-----------------------
    // save latest spec file
    //-----------------------

    fetch('https://github.psa-cloud.com/api/v3/repos/mph00/Spec/contents/spec/api/b2b/api-b2b.yaml?ref=' + lastB2BTagName, { headers: {"Authorization": githubAuthorizationHeaderBasicAuth} })
        .then(response => { return response.json() })
        .then(json => downloadLastApiB2BSpecRelease(json))
        .catch(err => { console.error(err) })
    // for last B2B mph00 webhook spec file
    fetch('https://github.psa-cloud.com/api/v3/repos/mph00/Spec/contents/spec/api/b2b/api-b2b-webhook-template.yaml?ref=' + lastB2BTagName, { headers: {"Authorization": githubAuthorizationHeaderBasicAuth} })
        .then(response => { return response.json() })
        .then(json => downloadLastB2BWebhookTemplateRelease(json))
        .catch(err => { console.error(err) })
    fetch('https://github.psa-cloud.com/api/v3/repos/mph00/Spec/contents/spec/api/b2c/psacc.yaml?ref=' + lastB2CTagName, { headers: {"Authorization": githubAuthorizationHeaderBasicAuth} })
        .then(response => { return response.json() })
        .then(json => downloadLastApiB2CSpecRelease(json))
        .catch(err => { console.error(err) })
    console.log('https://github.psa-cloud.com/api/v3/repos/mph00/Spec/contents/spec/api/b2c/api-b2c-webhook-template.yaml?ref=' + lastB2CTagName)
    fetch('https://github.psa-cloud.com/api/v3/repos/mph00/Spec/contents/spec/api/b2c/api-b2c-webhook-template.yaml?ref=' + lastB2CTagName, { headers: {"Authorization": githubAuthorizationHeaderBasicAuth} })
        .then(response => { return response.json() })
        .then(json => downloadLastB2CWebhookTemplateRelease(json))
        .catch(err => { console.error(err) })
};


//B. Register last yaml file
function downloadLastApiB2BSpecRelease(json) {

    //a. name of last spec file
    var specFileName = json.name;
    console.log("[" + specFileName + "] Download spec file from: " + json.url)

    //base 64 > Ascii
    let base64SpecFile = json.content;
    let buff = Buffer.from(base64SpecFile, 'base64');
    let AsciiSpecFile = buff.toString('ascii');

    //b. Save spec file in specFilePath
    fs.writeFile(specFilePath + specFileName, AsciiSpecFile,
        // callback function that is called after writing file is done
        function (err) {
            if (err) throw err;
            //if no error
            console.log("[" + specFileName + "] Save spec file in: " + __dirname + "/" + specFilePath)
        });
}

function downloadLastB2BWebhookTemplateRelease(json) {

    //a. name of last spec file
    var webhookTemplateFileName = json.name;
    console.log("[" + webhookTemplateFileName + "] Download spec file from: " + json.url)

    //base 64 > Ascii
    let base64SpecFile = json.content;
    let buff = Buffer.from(base64SpecFile, 'base64');
    let AsciiSpecFile = buff.toString('ascii');

    //b. Save spec file in specFilePath
    fs.writeFile(webhookTemplateFilePath + webhookTemplateFileName, AsciiSpecFile,
        // callback function that is called after writing file is done
        function (err) {
            if (err) throw err;
            //if no error
            console.log("[" + webhookTemplateFileName + "] Save spec file in: " + __dirname + "/" + webhookTemplateFilePath)
        });
}
function downloadLastApiB2CSpecRelease(json) {

    //a. name of last spec file
    var specFileName = json.name;
    console.log("[" + specFileName + "] Download spec file from: " + json.url)

    //base 64 > Ascii
    let base64SpecFile = json.content;
    let buff = Buffer.from(base64SpecFile, 'base64');
    let AsciiSpecFile = buff.toString('ascii');

    //b. Save spec file in current repo
    fs.writeFile(specFilePath + specFileName, AsciiSpecFile,
        // callback function that is called after writing file is done
        function (err) {
            if (err) throw err;
            //if no error
            console.log("[" + specFileName + "] Save spec file in: " + __dirname + "/" + specFilePath)
        });
}

function downloadLastB2CWebhookTemplateRelease(json) {

    //a. name of last spec file
    var webhookTemplateFileName = json.name;
    console.log("[" + webhookTemplateFileName + "] Download spec file from: " + json.url)

    //base 64 > Ascii
    let base64SpecFile = json.content;
    let buff = Buffer.from(base64SpecFile, 'base64');
    let AsciiSpecFile = buff.toString('ascii');

    //b. Save spec file in specFilePath
    fs.writeFile(webhookTemplateFilePath + webhookTemplateFileName, AsciiSpecFile,
        // callback function that is called after writing file is done
        function (err) {
            if (err) throw err;
            //if no error
            console.log("[" + webhookTemplateFileName + "] Save spec file in: " + __dirname + "/" + webhookTemplateFilePath)
        });
}