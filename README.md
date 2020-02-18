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
