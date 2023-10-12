module.exports = function check(str, bracketsConfig) {
  let stackOfStr =[];
  const Open = [];
  const Close = [];

bracketsConfig.forEach(e => {
//console.log(e)
const [o,c] = e
//console.log(o)
//console.log(c)
Open.push(o);
Close.push(c)
})
//console.log(Open)
//console.log(Close)
for (let i=0; i< str.length; i++){
    let currentSymbol = str[i];
    
if (Open.includes(currentSymbol) && !Close.includes(currentSymbol)){
  stackOfStr.push(currentSymbol);
  //console.log (stackOfStr)
} else if (Open.includes(currentSymbol) && Close.includes(currentSymbol) && stackOfStr.length>0) {
  if(stackOfStr.indexOf(currentSymbol) === stackOfStr.length-1){
      //console.log(i)
      stackOfStr.pop();
    }else 
  stackOfStr.push(currentSymbol)
  //console.log(i)
  //console.log ('specSymbol')
  if (stackOfStr.includes(currentSymbol)){
    //console.log(stackOfStr.indexOf(currentSymbol))
    //console.log(stackOfStr.length-1)
    //console.log('inclused')
    if (stackOfStr.indexOf(currentSymbol) < stackOfStr.length-1){
      //console.log(i)
      //console.log('currentSymbol)<stackOfStr.length-1')
      //console.log(stackOfStr.indexOf(currentSymbol))
      //console.log(stackOfStr.length-1)
      return false
    }else {
      //console.log(i)
      //console.log('filter')
      //console.log(stackOfStr)
      if (stackOfStr.indexOf(currentSymbol) < stackOfStr.length-1){
        arr = stackOfStr.filter((current) => current !== currentSymbol);
        stackOfStr = arr
      //console.log(stackOfStr)
    }
    }
    
  } 
}  else if (Close.includes(currentSymbol) && stackOfStr.length == 0) {
  console.log ('stackOfStr.length == 0');
  //return false
  stackOfStr.push(currentSymbol)
} else {
  //console.log(currentSymbol)
  const indexOpen = Close.indexOf(currentSymbol) 
  //console.log(Close.indexOf(currentSymbol))
  if (Open[indexOpen] === stackOfStr[stackOfStr.length -1]){
    //console.log(i)
    //console.log('pop')
    stackOfStr.pop();
  } else {
    //console.log('close without open')
    return false
  }

}
}
      //console.log (stackOfStr)
      return stackOfStr.length === 0;
}