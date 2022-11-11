const fun = (arr)=>{
    let count=0;
    return()=>{
      
        console.log("Hello"+arr[count])
        count++
      
    }
    
    
  }
  let name = fun(["Ram","Shyam"]);
  fun()// Print Hello Ram
  fun()//print Hello Shyam