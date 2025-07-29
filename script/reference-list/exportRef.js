const fs = require( 'fs' );
const path = require( 'path' );
const matter = require('gray-matter');

function exportRef(ref, directory, fileName) {
  if (ref == "notAvailable") console.log("API not available externaly.")
  else {
    let refFrontMatter = matter.stringify(ref.content, ref.data);
    outputDirectoryPath = path.join(directory, fileName)
    fs.writeFile(outputDirectoryPath, refFrontMatter, () => {
      console.log(`[${ref.data.name}] Successfully exported to ${outputDirectoryPath}`)
    });
  }
}

module.exports = exportRef;