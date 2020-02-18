const nx = require('@feizheng/next-js-core2');
const fs = require('fs');
const HttpsProxyAgent = require('https-proxy-agent');
require('../src/next-node-download');

describe('api.basic test', () => {
  test('nx.nodeDownload should download success', function(done) {
    const filename = '__tests__/fonts.zip';
    nx.nodeDownload({
      url:
        'https://www.iconfont.cn/api/project/download.zip?spm=a313x.7781069.1998910419.d7543c303&pid=1353955&ctoken=emej-x0RAKLAIFXDSJWExAyr',
      filename,
      headers: {
        Cookie:
          'UM_distinctid=16add543818718-0da0f90879778b-37647004-1aeaa0-16add5438197ab; CNZZDATA1260547936=1172082425-1558487320-%7C1558487320; cna=8ZCKFDNvDFECAWVQI9opO6SW; EGG_SESS_ICONFONT=U8AXvqwdm-42-umGXGwgKq_Emj2wuVCkA87TjZ3dn6xm2T4whio3sIKoy4kjkuBSusLMQ-0MhcjWBE1FwhfGmLoJPlWKxBTqlWxtg8B7bbSJSPO0I7NPE4kf9LX4tjz8mDAhc-rcPaThSLLr8oH7EEE7ICep6oSUnjhvfmiqXsx2OwFiS9Dh-YZxAmKiXl9unWLd_-ybyorkFlDxKk31jHcI8gDZCRVwToqtKruzV9S_gBrjq4EOJBBv1Z1AMey1ovNE-UJG9Bif9rfAFnwpRKiimX62yMchNk8374R-pvLyR1dJcGCLyM0FVYPSvudP6q5-hi4FRyb6BxQ2BbF_0llqCRrXka6AByY9cvhBqglGMpstfS32UFAi9hoQ65u8NJ-ZSp7ud_ZFYe9gC0H6oLk39MlsE2q8q6R0SJ9D5_Iq2EktPho6-U63ulovseDMSC4YP3nnrN7fO3nbhlU12EOcpf5YD4oTDhbUOgz23aSBWb90UlgeChBl2siLlsrLQrZ4XIeJnBBHHTrKM5OigWw3jPH5a4f2IfcGH3IlA0p1WZ_nqSR5uXWzdmY5Vax4lKDSKDSOEf6udZD_NPoNSl7B88iudErHjMNISwk9qI9JHLzaveyRV5PgmaqFSa8dq6dv8Qi_BwHboeK8Do7MQAmtTgrXaV6hJhEj_X8p9k5uQwmH5MwKCkjEvmdAJ5otMoaJSOaZNJVAx0AN8_ehZFdp8g_9Zcw6oNQA6j1uv-TNIA6ugFKRA6qU4gkLaLhx0534W6fVZTlwwQnAIuRn8mp-DDi4AftL0OmVLjSh-obTOq9r_cUW32-E4LQDmEYduGi6JqAZoL05kTSvYroUpy3mqMV4VQt93P5K1rWdYaL6P3x4SECO3JknrT2gk4nr_hpylVWxLNQK50tAqOoO-jWNvGNJDtJjjDBRlz6PcOk2uKDnT1IiYYTc5QTUCfZNvP6y9Bt0-g449ao6rTw32D1ackHWjqVyE-B_FrQOiXQq8Ni7A74nwmr6R0tUhmtlq7xwRSurDjnqm6jPIoevtZ9rrXjZdxk7eLYQ6YI7hk0UG-rRbgrKF1PAE9xIMamvA6vvJPhJg-8gUkfdSFVB1lIeGJmt_jS5Vohcn2eO8qCRgvBcTu8FpemAjfJJhYB8N02dF8vXEzQ6CQlv0I4fMHQFWZPZp8hn94NfJdqxpdxHT0zi8vBKUisGDekihaYCpjr9b5KBgMzHVO39VGM7Cca0nCCHvZe69fSpBIEfnnw=; trace=AQAAAIWmwwBGTwUAMXYN0hWqWg1JvXEM; ctoken=emej-x0RAKLAIFXDSJWExAyr; u=379985; u.sig=bWKXEWEX43ACue-iKN7Jsx3KE6CTn6kCn1W0Pd3zJiY; isg=BA4O149A3yZTL2q52fG2_ZWNX-LahOtJ2lPcYzhWXJHlm6z1ox28mNAZ04dSg8qh'
      }
    }).then((res) => {
      expect(fs.existsSync(filename)).toBe(true);
      done();
    });
  });

  test('download with https proxy', (done) => {
    const filename = '__tests__/master.zip';
    nx.nodeDownload({
      url: 'https://github.com/afeiship/boilerplate-book-notes/archive/master.zip',
      filename,
      agent: new HttpsProxyAgent('http://127.0.0.1:9090')
    }).then((res) => {
      expect(fs.existsSync(filename)).toBe(true);
      done();
    });
  });
});
