let clock = document.querySelector('#clock');



setInterval(function(){
    let date = new Date();
let time = date.toLocaleTimeString();
    console.log(time)
    clock.innerHTML = time;
},1000)

