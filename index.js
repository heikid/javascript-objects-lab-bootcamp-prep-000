var recipes = {}

var recipes = new Object ({key:"value"});
function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, updateObjectWithKeyAndValue, {[key]:value})
}
