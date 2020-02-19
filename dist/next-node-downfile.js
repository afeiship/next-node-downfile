/*!
 * name: @feizheng/next-node-downfile
 * description: Download file for next.
 * url: https://github.com/afeiship/next-node-downfile
 * version: 1.1.0
 * date: 2020-02-19 10:34:53
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var fetch = require('node-fetch');
  var fs = require('fs');
  var DEFAULT_OPTIONS = {};

  nx.nodeDownfile = function(inOptions) {
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
    module.exports = nx.nodeDownfile;
  }
})();

//# sourceMappingURL=next-node-downfile.js.map