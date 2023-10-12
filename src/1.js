module.exports = function check(str, bracketsConfig) {
    let stackOfStr =[];
  
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

      if (Object.values(Close_Brackets).includes(currentSymbol)){
        if (!stackOfStr.includes(currentSymbol)){  
          stackOfStr.push(currentSymbol)} else {
              let indexCloseBracket = stackOfStr.indexOf(currentSymbol);
              stackOfStr.pop()
              if (indexCloseBracket < stackOfStr.length-1){
                //console.log('tuta')
                return false
              } else {}
              }
              } else if(Open_Brackets.includes(currentSymbol))  { 
                
                stackOfStr.push(currentSymbol);
                } else {
                  if (stackOfStr.length === 0) {
                    //console.log('tyt')
                    return false;
                  }
            let topElement = stackOfStr[stackOfStr.length -1];
  
            if(Close_Brackets[currentSymbol] === topElement){
              stackOfStr.pop();
            } else {
             // console.log('tyte')
              return false;
            }
          }
    }
    //console.log(stackOfStr)
    return stackOfStr.length === 0;
  }
  
  //console.log(check('|()|',[['(', ')'], ['|', '|']]))