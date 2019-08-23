/*!
 * name: next-node-download
 * url: https://github.com/afeiship/next-node-download
 * version: 1.0.0
 * date: 2019-08-23T05:53:47.810Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var fetch = require('node-fetch');
  var fs = require('fs');

  nx.nodeDownload = function(inOptions) {
    var options = inOptions;
    var filename = inOptions.filename;
    var url = inOptions.url;
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
