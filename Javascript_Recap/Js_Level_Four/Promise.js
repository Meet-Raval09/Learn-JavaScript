// Promise In Javascript.
function getUser() {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({name:"Meet"});
  }, 1000);
 });
}

getUser()
.then(user => {
 console.log(user.name);
})
.catch(err => console.log(err))
.finally(() => console.log("API Finished"));