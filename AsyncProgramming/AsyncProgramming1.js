function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  var result;
  async function asyncCall() {
    console.log('calling');
    result = resolveAfter2Seconds();
      console.log("Hello World");
  }
  asyncCall();
  setTimeout(() => {console.log(result)},2000);
  