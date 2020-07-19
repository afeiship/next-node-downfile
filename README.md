# next-node-downfile
> Download file for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## npm publish failed
~~~
npm notice 📦  @feizheng/next-node-download@1.0.0
npm notice === Tarball Contents === 
npm notice 1.2kB dist/next-node-downfile.js    
npm notice 718B  dist/next-node-downfile.min.js
npm notice 1.2kB package.json                  
npm notice 1.3kB dist/next-node-downfile.js.map
npm notice 979B  README.md                     
npm notice 1.1kB LICENSE.txt                   
npm notice === Tarball Details === 
npm notice name:          @feizheng/next-node-downfile            
npm notice version:       1.0.0                                   
npm notice package size:  2.7 kB                                  
npm notice unpacked size: 6.4 kB                                  
npm notice shasum:        254df1d7b6991b8bd61713049a00fff78b5c0409
npm notice integrity:     sha512-ZZZY21VS6hQ18[...]NutR8/d5U1T6g==
npm notice total files:   6                                       
npm notice 
npm ERR! code E400
npm ERR! 400 Bad Request - PUT https://registry.npmjs.org/@feizheng%2fnext-node-downfile - That word is not allowed. Please contact support (support@npmjs.com) if you believe you received this in error.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/feizheng/.npm/_logs/2020-02-18T03_45_54_439Z-debug.log
~~~

## reason
~~~
Due to spam mitigation, the word download is no longer allowed to be used in a package name. We recommend choosing a new package name without the download word.
~~~

## usage
```js
import '@feizheng/next-node-downfile';

const filename = '__tests__/master.zip';
nx.nodeDownfile({
  url: 'https://github.com/afeiship/boilerplate-book-notes/archive/master.zip',
  filename,
  agent: new HttpsProxyAgent('http://127.0.0.1:9090')
}).then((res) => {
  expect(fs.existsSync(filename)).toBe(true);
  done();
});
```

## resources
- https://stackoverflow.com/questions/49603939/async-callback-was-not-invoked-within-the-5000ms-timeout-specified-by-jest-setti
- https://www.jianshu.com/p/63d70a93a401
- https://jestjs.io/docs/en/configuration#testtimeout-number
- https://stackoverflow.com/questions/44524236/using-proxy-like-fiddler-with-fetch-api
- https://www.itminus.com/blog/2016/11/01/WindWhisper/ECMAScript/%E7%88%AC%E8%99%AB/Fetch-API-%E4%BD%BF%E7%94%A8%E4%BB%A3%E7%90%86/
- https://github.com/Gyumeijie/issue-blog/issues/2

## license
Code released under [the MIT license](https://github.com/afeiship/next-node-downfile/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-node-downfile
[version-url]: https://npmjs.org/package/@feizheng/next-node-downfile

[license-image]: https://img.shields.io/npm/l/@feizheng/next-node-downfile
[license-url]: https://github.com/afeiship/next-node-downfile/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-node-downfile
[size-url]: https://github.com/afeiship/next-node-downfile/blob/master/dist/next-node-downfile.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-node-downfile
[download-url]: https://www.npmjs.com/package/@feizheng/next-node-downfile
