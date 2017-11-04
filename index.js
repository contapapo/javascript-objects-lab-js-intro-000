var recipes ={
  eggs:3
}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({},object,{
    [key]:value
  });
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign(object,{
    [key]:value
  });
  return newObj;
}

function deleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}