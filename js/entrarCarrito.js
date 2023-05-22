const carritoBoton= document.querySelector(".carrito");
const carritoDentroContainer= document.querySelector(".carritoDentroContainer");
carritoBoton.addEventListener("click",(e)=>{
    e.preventDefault();
    entrarAlCarrito()
})

function entrarAlCarrito(){
    carritoDentroContainer.classList.add("carritoDentroContainerActivo");
    carritoDentroContainer.classList.remove("carritoDentroContainer");}
