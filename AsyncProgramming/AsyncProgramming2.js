var x = 1;
function getAsyncData1(){
    return new Promise(function(resolve, reject){ //executer function
      try{  
      setTimeout(function(){
          x+=1;
          resolve(x);
        },2000);
      }
      catch(error){
        reject(error);
      }
    });
}
getAsyncData1()
.then(function(results){
  console.log(results);
})
.catch(function(error){
  console.log(error);
})