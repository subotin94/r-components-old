const glob = require('glob');
const fs = require('fs');

const docsMetadata = [];

// const componentType = 

const processFile = path => {
  if (path.includes('.component.ts')) {
    const file = Buffer.from(fs.readFileSync(path)).toString();

    docsMetadata.push({
      componentId: getClassName(file),
      inputs: getInputParams(file),
      outputs: getOutputParams(file)
    });
  }
};

glob('./projects/r-components/src/**/*.ts', (err, files) => {
  files.forEach(path => {
    processFile(path);
  });
  console.log(docsMetadata);

});

/**
 * Extract class name from a file
 * class name is positioned between export class and a first space after the word
 * @param file
 * @returns {string}
 */
const getClassName = (file) => {
  let retVal = '';
  const regExp = /export class\s(.*?)[\s]/gs;
  const match = regExp.exec(file);

  retVal = (match && match.length > 1) ? match[1].trim() : retVal;
  retVal = retVal.replace('<T>', '');
  return retVal;
};
/**
 * Extract input parameters from a file
 * @param file
 * @returns {Array}
 */
const getInputParams = (file) => {
  const retVal = [];
  let matchedInputTags = file.match(/@Input\(\)((.|\n)*?);/gs);

  if (matchedInputTags && matchedInputTags.length > 0) {
    // filter out HostBindings, these are not inputs
    matchedInputTags = matchedInputTags.filter(x => !x.includes('HostBinding'));
    for (const matchedInputTag of matchedInputTags) {
      const myRegexp = /@Input\(\)\s*(.*):\s*(.*)\s[=|;]/gs;
      const match = myRegexp.exec(matchedInputTag);

      if (match && match.length > 0) {
        retVal.push({
          name: match[1],
          type: match[2]
        })
      }
    }
  }
  return retVal;
};

/**
 * Extract output parameters from a file
 * All output
 * @param file
 * @returns {Array}
 */
const getOutputParams = (file) => {
  const retVal = [];
  let matchedInputTags = file.match(/@Output\(\)((.|\n)*?);/gs);

  if (matchedInputTags && matchedInputTags.length > 0) {
    //filter out hostBindings
    matchedInputTags = matchedInputTags.filter(x => !x.includes('HostBinding'));
    for (const matchedInputTag of matchedInputTags) {
      const myRegexp = /@Output\(\)\s*(.*):\s*(.*)\s[=|;]/gs;
      const match = myRegexp.exec(matchedInputTag);

      if (match && match.length > 0) {
        retVal.push({
          name: match[1],
          type: match[2]
        })
      }
    }
  }
  return retVal;
};

