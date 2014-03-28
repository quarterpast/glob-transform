var minimatch = require('minimatch');
var filterTransform = require('filter-transform');

function globTransform(glob, transform) {
  return filterTransform(
    function(file) { return minimatch(file, glob) },
    transform
  );
}

module.exports = globTransform;