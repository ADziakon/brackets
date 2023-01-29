module.exports = function check(str, bracketsConfig) {
  // your solution
  arr = [];
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j].includes(str[i])) {
        l = arr.length - 1;
        if (bracketsConfig[j][0].includes(str[i])) {
          //условие для прямых скобок |, если вторая такая же то удалить
          if (str[i] == arr[l] && bracketsConfig[j][1] == str[i]) {
            arr.pop(str[i]);
          } else {
            arr.push(str[i]);
          }
        } else {
          if (arr.length == 0) {
            return false;
          }
          //если последний элемента массива равен открывающей скобке, 
          //а текущий элемент массива равен закрывающей скобке
          if (
            arr[l] == bracketsConfig[j][0] &&
            bracketsConfig[j][1] == str[i]
          ) {
            //удаляем пару
            arr.pop(str[i]);
          } else {
            //иначе это не пара
            return false;
          }
        }
      }
    }
  }
  if (arr.length != 0)
    return false;
  else return true;
};
