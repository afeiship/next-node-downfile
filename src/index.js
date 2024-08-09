import nx from '@jswork/next';
import fs from 'fs';

nx.nodeDownfile = function(inOptions) {
  const options = nx.mix(null, inOptions);
  const filename = options.filename;
  const url = options.url;
  return new Promise(function(resolve, reject) {
    return fetch(url, options).then(function(res) {
      const fileStream = fs.createWriteStream(filename);
      res.body.pipe(fileStream);
      res.body.on('error', reject);
      fileStream.on('finish', resolve);
    });
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.nodeDownfile;
}

export default nx.nodeDownfile;
