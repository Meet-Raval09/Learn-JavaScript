// The Error Object.
try{
 throw new Error("Throwing An Error..");
}catch(error){
 console.log("error",error)
 console.log("error name",error.name)
 console.log("error message",error.message)
 console.log("error.stack",error.stack)
}