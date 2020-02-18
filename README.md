# next-node-download
> Download file for next.

## installation
```bash
npm install -S @feizheng/next-node-download
```

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
