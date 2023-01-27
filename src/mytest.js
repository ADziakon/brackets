str = '((()))()';
bracketsConfig = [['(', ')']];
arr = [];
for(i=0;i<str.length;i++){
    for(j=0;j<bracketsConfig.length;j++){
        console.log(" скобка: " + bracketsConfig[j] + " строка: " + str[i])
        console.log("рез: " + bracketsConfig[j][0].includes(str[i]));
        if (bracketsConfig[j].includes(str[i]) ){
                if (arr.length == 0){
                    console.log("test2");
                    arr.push(str[i]);
                }
                else {
                    l = arr.length-1;
                    if (bracketsConfig[j][0].includes(str[i]) && arr[l] == str[i]){
                        console.log("false1");
                        //return false;
                    } else if (bracketsConfig[j][1].includes(str[i]) && arr[l] == bracketsConfig[j][0]){
                        arr.pop(str[i]);
                        //arr.pop(str[i-1]);
                        console.log("true1 " + l + " -- " +  arr[l] + "" + bracketsConfig[j][0]);
                        console.log("true1");
                    //поискать пару 
                    }
            }
            
        }else{
            console.log("false2");
        }
    
    }

  //bracketsConfig[i].includes(str[i]);
}
if(arr.length != 0)
    //return false;
    console.log("false22")