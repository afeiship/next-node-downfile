/*!
 * name: next-node-download
 * url: https://github.com/afeiship/next-node-download
 * version: 1.0.0
 * date: 2019-08-23T05:54:28.689Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var fetch = require('node-fetch');
  var fs = require('fs');
  var DEFAULT_OPTIONS = {};

  nx.nodeDownload = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var filename = options.filename;
    var url = options.url;
    return new Promise(function(resolve, reject) {
      return fetch(url, options).then(function(res) {
        var fileStream = fs.createWriteStream(filename);
        res.body.pipe(fileStream);
        res.body.on('error', function(err) {
          fileStream.close();
          reject({ code: 1 });
        });
        fileStream.on('finish', function() {
          fileStream.close();
          resolve({ code: 0 });
        });
      });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nodeDownload;
  }
})();

//# sourceMappingURL=next-node-download.js.map
