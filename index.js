var recipes = {}

var recipes = new Object ({key:"value"});
function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value;
  return obj;
}
