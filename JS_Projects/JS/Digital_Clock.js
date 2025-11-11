setInterval(function(){
 let ele = document.querySelector('.msg-box');
 let date = new Date();
 let localtime = date.toLocaleTimeString();
 date.innerHTML = localtime;
 ele.innerHTML = localtime;
},1000)

