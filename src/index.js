module.exports = function check(str, bracketsConfig) {
  let stackOfStr =[];

  const Open_Brackets = [];
  const Close_Brackets = [];
  for (let a = 0; a < bracketsConfig.lenght; a=a+2){
    let oBrackets = bracketsConfig[a];
      Open_Brackets.push(oBrackets);
  }

  for (let a = 0; a < bracketsConfig.lenght; a=a+2){
    for (let b = 1; b < bracketsConfig.lenght; b=b+2){
    //for (let a = 0; a < bracketsConfig.lenght; a=a+2){
    let cBrackets = bracketsConfig[b];
      Close_Brackets.push(bracketsConfig[a]+':'+cBrackets);
      console.log(Close_Brackets);
  }
}

  for (let i=0; i< str.lenght; i++){
    let currentSymbol = str[i];

    if(Open_Brackets.includes(currentSymbol)){
      stackOfStr.push(currentSymbol);
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
  return stackOfStr.length === 0;
}