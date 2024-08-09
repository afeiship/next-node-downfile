require('../src');

describe('api.basic test', () => {
  test('nx.boilerplatePackage', async () => {
    await nx.nodeDownfile({
      url: 'https://www.iconfont.cn/api/project/download.zip?pid=4644398&ctoken=ldvj2ogXUEvE6mDiLwqJ7BS3',
      filename: '__tests__/iconfont.zip',
      headers: {
        'cookies':'EGG_SESS_ICONFONT=Hu68kBY7XO7C6Udp3T99M1asKmUZ0gxjps8xjTrjx4bVP23DuZfsTSJHWJSyJ9AwoDLVpuiwa6Jc7cT565nxPJQvD4yy1rsBQDplj1DiRvJRNddx7szTHAwkGQHGnmftG6o_ruUCZm-axysDXJnSr97Ne69maZ2UYeejs65TIS62wfkQPKjqQGIsPAEdLUpxRISKJIBPq-yz6sFww6ApiAR0m1FOwzZ5GRyT-EceDr4=; cna=qDO0HaKK1DsCAdOh+e5QW9zE; ctoken=ldvj2ogXUEvE6mDiLwqJ7BS3; u=379985; u.sig=JXVk_hLer-rt--QdvnTLDRVwYUhDtnxR1-PT4Y4I7bA; xlly_s=1; isg=BMLCuDxsECu8ng_see1GsG_FE84kk8atABHb2Azb7jXgX2LZ9CMWvUiZD1sjDz5F; tfstk=fr1ZTuVYQIjCbBBDYHO28cVD5kO9GQE5istXoZbD5hxi1ficLGsvfKav1t8DYipXjNwO3ISl4hb1lohqoCCCCjt_XI7cVIr7V7N5WNdJiuZ5HKdPRIY0GnA1OSfXMIq7AvGDB7RAVYcqLS738ETqSAjDIyJHPHcMofYmxy8vxnADjIxnKETjSjxiiEI5oNlePd4P9MzrAm86Q3baejcVTb9wqNxEiufe7uKlSHlmghmYcbQcmolXZTIFgLjzgXd1z9AHusUo3n7cy_BWg5oJ79bPYC1ukmLdFT6kLsF-6CXRR6J5sDqv89bRDUvZAvIlRa19psrrxnB6yBYVMzD20ZbRwTOl4riv-x1VMOom3dYp83aU-OIN7UMEkPbrHxp39e-75FMxHdxW83aU8xHvKaYeVPT1.'
      }
    });
  });
});
