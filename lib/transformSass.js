/**
 * Created by Robin Hsu on 18/4/28.
 * Last edited by Robin Hsu on 18/4/28.
 */
const sass = require('node-sass');
const fs = require('fs');
const postcss = require('postcss');

const postcssConfig = require('../postcss.config');

function transformSass(sassFile) {
  const promise = new Promise(function(resolve, reject) {
    sass.render({
      file: sassFile,
      precision: 8
    }, function(err, result) {
      if (err) reject(err);
      resolve(result)
    });
  }).then((result) => {
    return postcss(postcssConfig.plugins).process(result.css, {from: undefined});
  }).then((r) => {
    return r.css;
  });

  return promise;
}

module.exports = transformSass;
