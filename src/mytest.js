str = '||';
bracketsConfig = [['|', '|']];
arr = [];
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j].includes(str[i])) {
        l = arr.length - 1;
        console.log("str1: " + str[i]);
        if (bracketsConfig[j][0].includes(str[i])) {
            if (str[i] == arr[l] && bracketsConfig[j][1] == str[i] ){
                arr.pop(str[i]);
                console.log("str del1: " + str[i] + " arr: " + arr[l] );
            }else{
                arr.push(str[i]);
            }
          
          //return false;
          console.log("str add: " + str[i]);
        } else {
          if (arr.length == 0) {
            //return false;
            console.log("false4");
          }
          if (
            
            arr[l] ==  bracketsConfig[j][0] && bracketsConfig[j][1] == str[i]
          ) {
            // &&
            arr.pop(str[i]);
            console.log("str del: " + str[i]);
            //return true;
            //поискать пару
          } else {
            //return false;
            console.log("false2");
          }
        }
      } 
      else {
        //return false;
        console.log("false3");
        console.log("str : " + str[i]);
      }
    }
  }
  if (arr.length != 0) //return false;
  {
    console.log("arr : " + arr);
    console.log("false");
  } 
  else
    console.log("true");