const obj = {
  name: "Meet",
  address: {
    city: "Delhi",
    pin: {
      code: 110001,
      area: "Central"
    }
  },
  skills: {
    programming: {
      lang: "JS"
    }
  }
};

function flattenObject(obj,pre_keys = "",newobj = {}){
 for(let key in obj){
  const newKey = pre_keys ? `${pre_keys}_${key}`: key; 

  if(
    typeof obj[key]=== "object" && 
    obj[key] !== null && !Array.isArray(obj[key])
    ){
    flattenObject(obj[key], newKey, newobj);
}else{
  newobj[newKey] = obj[key];
 }
 }
 return newobj;
}
const flattened = flattenObject(obj);
console.log(flattened);
