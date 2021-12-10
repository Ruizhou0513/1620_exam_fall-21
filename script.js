 

//  Dark Mode code 
var toggle = document.querySelector(".toggle");
var body = document.querySelector('body')
let tag = 0
toggle.onclick = function () {
    if (tag == 0) {
        tag = 1
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    }
    else {
        tag = 0
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    
    }
}


 

//  Dark Mode code 
var toggle = document.querySelector(".toggle");
var body = document.querySelector('body')
let tag = 0
toggle.onclick = function () {
    if (tag == 0) {
        tag = 1
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    }
    else {
        tag = 0
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    
    }
}



// ## Contact Form code

 var btn=document.querySelector("#frm-btn")
 var myForm=document.querySelector(".myForm")
 btn.onclick=function(){
     let obj={
        name:myForm.name.value,
        msg:myForm.msg.value,
        email:myForm.email.value,

     }
     console.log(obj); 
 }