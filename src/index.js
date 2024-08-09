import nx from '@jswork/next';
import download from '@jswork/node-down';

nx.nodeDownfile = download;

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.nodeDownfile;
}

export default nx.nodeDownfile;
