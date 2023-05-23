//Closure
function TestClosure()
{
    var counter=1
    return ()=>
    {
        return counter+=1;
    }
}
var add=TestClosure();
add();
add();
console.log(add);

var PrintArr=[]
for(var i=0;i<10;i++)
{
 var capturevalue=function(value){
      return ()=>{console.log(value);};
    }
    PrintArr.push(capturevalue(i));
}
PrintArr[2]();

