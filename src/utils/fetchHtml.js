let cache = {};
const fileSystemModule = require("tns-core-modules/file-system");
// const file = new java.io.File("mycache.txt");

const documents = fileSystemModule.knownFolders.documents();
const folder = documents.getFolder("testFolder");
const file = folder.getFile(`${"testFile"}.txt`);

try {
  const text = file.readTextSync();
  cache = JSON.parse(text || "{}");
} catch (e) {
  console.error(e);
}

setInterval(() => {
  file.writeText(JSON.stringify(cache)).catch(console.error);
}, 5000);

async function fetchHtml(url, options) {
  if (url in cache) {
    console.log("cache hit");

    return cache[url].html;
  }

  const html = await fetch(url, options).then(r => r.text());
  cache[url] = {
    html
  };

  return html;
}

export default fetchHtml;
