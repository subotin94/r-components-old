const glob = require('glob');
const fs = require('fs');

const docsMetadata = {
  components: [],
  modules: []
};

// const componentType = 

const processFile = path => {
  if (path.includes('.component.ts')) {
    // const component = {
    //   module: ,
    //   path
    // };
    docsMetadata.components.push(path);
  } else if (path.includes('.module.ts')) {
    docsMetadata.modules.push(path);
  }
}

glob('./projects/r-components/src/**/*.ts', (err, files) => {
  console.log(files);
  files.forEach(path => {
    processFile(path);
    console.log(Buffer.from(fs.readFileSync(path)).toString())
  });
  // console.log(docsMetadata);
});
