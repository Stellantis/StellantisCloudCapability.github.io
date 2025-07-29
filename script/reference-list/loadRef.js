const exportRef = require('./exportRef');

const fs = require( 'fs' );
const path = require( 'path' );
const matter = require('gray-matter');

const webportalV2RefInt = "../../_webportal-ivi-private-reference/";
const webportalV2RefExt = "../../_webportal-ivi-public-reference/";
const mobileSdkRefInt = "../../_mobile-sdk-reference/";
const mobileSdkRefExt = "../../_mobile-sdk-reference/";

function assignSourcePath(availability, sdkName){
  if (availability == 'internal' && sdkName == 'webportal_v2') return webportalV2RefInt;
  if (availability == 'internal' && sdkName == 'mobile_sdk') return mobileSdkRefInt;
  if (availability == 'external' && sdkName == 'webportal_v2') return webportalV2RefExt;
  if (availability == 'external' && sdkName == 'mobile_sdk') return mobileSdkRefExt;
  else throw new Error(`Rules for source path assignment not valid, ava=${availability}, sdk=${sdkName}.`)
}

function readFrontMatter(intRefRaw, fileName) {
  let parsedintRefRaw =  matter(intRefRaw);
  if (!parsedintRefRaw.isEmpty || !parsedintRefRaw.data) {
    return parsedintRefRaw;
  } else {
    throw new Error(`[${fileName}] this file seems empty.`)
  }
};

async function loadRef(loadingParams) {
  const refSource = assignSourcePath(loadingParams.availability, loadingParams.sdkName);
  const filesList = await fs.promises.readdir(refSource);
  for(const fileName of filesList) {
    const sourceRefPath = path.join(refSource, fileName);
    const refRaw = await fs.promises.readFile(sourceRefPath, 'utf8');
    const refParsed = readFrontMatter(refRaw, fileName);
    let proxiAvaRef = loadingParams.callback(
      loadingParams.schema,
      refParsed,
      fileName,
      loadingParams.action
    )
    if (loadingParams.action == 'proxiAvaOutput') {
       exportRef(proxiAvaRef, assignSourcePath('external', loadingParams.sdkName), fileName);
    }
  }
};

module.exports = loadRef;