# next-node-downfile
> Download file for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-node-downfile
```

## usage
```js
import '@jswork/next-node-downfile';

nx.nodeDownfile({
  url: 'https://www.iconfont.cn/api/project/download.zip?pid=4644398&ctoken=ldvj2ogXUEvE6mDiLwqJ7BS3',
  headers: {
    cookie: 'EGG_SESS_ICONFONT=xxx'
  }
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-node-downfile/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-node-downfile
[version-url]: https://npmjs.org/package/@jswork/next-node-downfile

[license-image]: https://img.shields.io/npm/l/@jswork/next-node-downfile
[license-url]: https://github.com/afeiship/next-node-downfile/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-node-downfile
[size-url]: https://github.com/afeiship/next-node-downfile/blob/master/dist/next-node-downfile.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-node-downfile
[download-url]: https://www.npmjs.com/package/@jswork/next-node-downfile
