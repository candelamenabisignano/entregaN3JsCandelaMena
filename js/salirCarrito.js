const salirCarrito=document.querySelector(".salirCarrito");
console.log(salirCarrito)
salirCarrito.addEventListener("click",(e)=>{
    e.preventDefault();
    salirDelCarrito()
})

function salirDelCarrito(){
    carritoDentroContainer.classList.add("carritoDentroContainer")
    carritoDentroContainer.classList.remove("carritoDentroContainerActivo")
}
