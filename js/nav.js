const nav= document.querySelector("nav");
window.addEventListener("scroll",()=>{
    if(window.scrollY>0){
        nav.classList.add("activo")
    }else{
        nav.classList.remove("activo")
    }
})