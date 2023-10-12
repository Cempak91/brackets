module.exports = function check(str, bracketsConfig) {
  let stackOfStr =[];
  let specCase = 0;

  const Open_Brackets = [];
  const arr = Object.fromEntries(bracketsConfig);
  const Close_Brackets = {};
  
  Object.entries(arr).forEach(([key, value]) => {
  Close_Brackets[value] = key
})
  var arr2 = [];
  for (i = 0; i < bracketsConfig.length; i++) {
  for (j = 0; j < bracketsConfig[i].length; j++) {
    arr2.push(bracketsConfig[i][j]);
  }
}
  for(let i=0; i<arr2.length; i=i+2){
    Open_Brackets.push(arr2[i]);
  }

  for (let i=0; i< str.length; i++){
    let currentSymbol = str[i];

    if(Open_Brackets.includes(currentSymbol)){

      if(Close_Brackets[currentSymbol]!== undefined) {
        specCase++;
        
      }else stackOfStr.push(currentSymbol);
  
    } else {
      if (stackOfStr.length === 0) {
        return false;
      }
      let topElement = stackOfStr[stackOfStr.length -1];

      if(Close_Brackets[currentSymbol] === topElement){
        stackOfStr.pop();
      } else {
        return false;
      }
    }
    
  }
  
  return (stackOfStr.length === 0&&specCase%2==0);
}