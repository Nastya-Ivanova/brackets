module.exports = function check(str, bracketsConfig) {
  let map = new Map(bracketsConfig);

  let arr = str.split('');

  let data = [];

  if(str.length%2 > 0 || str.length == 0){
    return false;
  }

  for(let i = 0; i < arr.length; i++){
    if(map.has(arr[i]) && !(data.includes(map.get(arr[i])))){
      data.push(arr[i]);
    }
    else if(arr[i] == map.get(data[data.length-1])){
      data.pop();
    }
    else return false;
  }
  return data.length > 0 ? false : true;
 }
