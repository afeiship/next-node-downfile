# next-node-download
> Download file for next

## installation
```bash
npm install -S afeiship/next-node-download --registry=https://registry.npm.taobao.org
```

## usage
```js
nx.nodeDownload({
  url:
    'http://test.com/download.zip',
  filename: 'download.zip',
  headers: {
    Cookie:
      'FOtJ2lPcYzhWXJHlm6z1ox28mNAZ04dSg8qh'
  }
}).then((res) => {
  if(!res.code){
    console.log('success!');
  }
});
```
