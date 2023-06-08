const limpiar=document.querySelector(".limpiar");

limpiar.addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.setItem("carrito",[]) 
    carrito=[]
    carritoMostrar()
})