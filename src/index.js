
module.exports = function check(str, bracketsConfig) {
  // your solution
  arr = [];
  for(i=0;i<str.length;i++){
      for(j=0;j<bracketsConfig.length;j++){
          if (bracketsConfig[j].includes(str[i]) ){
                  if (arr.length == 0){
                      arr.push(str[i]);
                  }
                  else {
                      l = arr.length-1;
                      if (bracketsConfig[j][0].includes(str[i]) && arr[l] == str[i]){
                          //console.log("false1");
                          return false;
                      } else if (bracketsConfig[j][1].includes(str[i]) && arr[l] == bracketsConfig[j][0]){
                          arr.pop(str[i]);
                          return true;
                      //поискать пару 
                      }
              }
              
          }else{
            return false;
              //console.log("false2");
          }
      
      }
  }
  if(arr.length != 0)
    return false;
      //console.log("false22")
}
