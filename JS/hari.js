function show1(){
    document.querySelector(".signup").classList.toggle("show1");
    document.querySelector("body").style.overflow = "hidden";
}
function hide1(){
    document.querySelector(".signup").classList.remove("show1");
    document.querySelector("body").style.overflow = "visible";
}
 function show2(){
     document.querySelector(".create").classList.toggle("show2");
    document.querySelector("body").style.overflow = "hidden";
    
}
 function hide2(){
    document.querySelector(".create").classList.remove("show2");
    document.querySelector("body").style.overflow = "visible";
    document.querySelector(".signup").classList.remove("show1");
 }
 function home(){
    
 }
 document.getElementById("ho").addEventListener("click",redirectFunction);
 function redirectFunction(){
    window.location.href="index1.html";
 }
 