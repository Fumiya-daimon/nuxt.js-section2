export default function() {
  console.log('moduleのテスト');

  this.nuxt.hook('ready', async nuxt => {
    // console.log(this)
    console.log('nuxt is ready');
  })

};
