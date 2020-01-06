let fs = require("fs");
let path = require("path");
const { say } = require('cfonts')
const [, , ...argv] = process.argv;
fs.readFile(path.join(__dirname, "../package.json"), "utf8", function(
  err,
  data
) {
  if (err) throw err;
  let packageJson = JSON.parse(data);
  let { version } = packageJson;
  let versionPre;
  if (version.includes("-")) {
    versionPre = version.split("-")[0];
  } else {
    versionPre = version;
  }
  if (argv[0]) {
    packageJson.version = `${versionPre}-${argv[0]}`;
  } else {
    packageJson.version = `${versionPre}-last`;
  }
  let strPackageJson = JSON.stringify(packageJson, null, 4);
  fs.writeFile(
    path.join(__dirname, "../package.json"),
    strPackageJson,
    "utf8",
    err => {
      if (err) throw err;
      say(`${argv[0]?argv[0]:`Release`} version`, {
        colors: ['yellow','#f80'],
        font: 'block',
        space: true
      })
    }
  );
});
