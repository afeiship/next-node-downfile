require('../src');

describe('api.basic test', () => {
  test('nx.boilerplatePackage', async () => {
    await nx.nodeDownfile({
      url: 'https://www.iconfont.cn/api/project/download.zip?pid=4644398&ctoken=ldvj2ogXUEvE6mDiLwqJ7BS3',
      filename: '__tests__/iconfont.zip',
      headers: {
        cookie:
          'EGG_SESS_ICONFONT=Hu68kBY7XO7C6Udp3T99M1asKmUZ0gxjps8xjTrjx4bVP23DuZfsTSJHWJSyJ9AwoDLVpuiwa6Jc7cT565nxPJQvD4yy1rsBQDplj1DiRvJRNddx7szTHAwkGQHGnmftG6o_ruUCZm-axysDXJnSr97Ne69maZ2UYeejs65TIS62wfkQPKjqQGIsPAEdLUpxRISKJIBPq-yz6sFww6ApiAR0m1FOwzZ5GRyT-EceDr4='
      }
    });
  });
});
