var recipes = new Object
recipes = {[key]:value}

function updateObjectWithKeyAndValue(object,key,value){
  var obj = recipes
  Object.assign({}, obj, {['key']:value});
  return recipes
}
