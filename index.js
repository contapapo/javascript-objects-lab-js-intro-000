var recipes ={
  eggs:3
}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({},object,{
    [key]:value
  });
  return newObj;
}
