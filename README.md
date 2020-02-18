# next-node-download
> Download file for next.

## installation
```bash
npm install -S @feizheng/next-node-download
# can not publish to npm
```

## npm publish failed
~~~
npm notice 📦  @feizheng/next-node-download@1.0.0
npm notice === Tarball Contents === 
npm notice 1.2kB dist/next-node-download.js    
npm notice 718B  dist/next-node-download.min.js
npm notice 1.2kB package.json                  
npm notice 1.3kB dist/next-node-download.js.map
npm notice 979B  README.md                     
npm notice 1.1kB LICENSE.txt                   
npm notice === Tarball Details === 
npm notice name:          @feizheng/next-node-download            
npm notice version:       1.0.0                                   
npm notice package size:  2.7 kB                                  
npm notice unpacked size: 6.4 kB                                  
npm notice shasum:        254df1d7b6991b8bd61713049a00fff78b5c0409
npm notice integrity:     sha512-ZZZY21VS6hQ18[...]NutR8/d5U1T6g==
npm notice total files:   6                                       
npm notice 
npm ERR! code E400
npm ERR! 400 Bad Request - PUT https://registry.npmjs.org/@feizheng%2fnext-node-download - That word is not allowed. Please contact support (support@npmjs.com) if you believe you received this in error.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/feizheng/.npm/_logs/2020-02-18T03_45_54_439Z-debug.log
~~~

## usage
```js
import '@feizheng/next-node-download';

const filename = '__tests__/master.zip';
nx.nodeDownload({
  url: 'https://github.com/afeiship/boilerplate-book-notes/archive/master.zip',
  filename,
  agent: new HttpsProxyAgent('http://127.0.0.1:9090')
}).then((res) => {
  expect(fs.existsSync(filename)).toBe(true);
  done();
});F
```

## resources
- https://stackoverflow.com/questions/49603939/async-callback-was-not-invoked-within-the-5000ms-timeout-specified-by-jest-setti
- https://www.jianshu.com/p/63d70a93a401
- https://jestjs.io/docs/en/configuration#testtimeout-number
- https://stackoverflow.com/questions/44524236/using-proxy-like-fiddler-with-fetch-api
- https://www.itminus.com/blog/2016/11/01/WindWhisper/ECMAScript/%E7%88%AC%E8%99%AB/Fetch-API-%E4%BD%BF%E7%94%A8%E4%BB%A3%E7%90%86/
- https://github.com/Gyumeijie/issue-blog/issues/2
