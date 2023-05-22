/////SI YA SE GENERO EL LOCAL STORAGE QUE SE CARGUE, SINO EMPEZAR CON EL CARRITO VACIO///

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoDentro=document.querySelector(".carritoDentro")
const totalContainer=document.querySelector(".total")
////si hay una clave carrito en el storage y se parseo a objeto en el carrito, mostrar esos objetos en el carrito
if(JSON.parse(localStorage.getItem("carrito"))){
    carritoMostrar()
}
function agregarCarrito(id){

    ///EVALUAR SI EL PRODUCTO EXISTE EN EL CARRITO///
    const cantidad=carrito.some((prod)=>prod.id===id)
    ////SI NO EXISTE HAY QUE BUSCAR EN EL ARRAY DE OBJETOS EL PRODUCTO Y PUSHEARLO AL CARRITO///
    console.log(cantidad)
    if(!cantidad){
        const encontrar= productos.find((prod)=>prod.id==id)
        carrito.push(encontrar);
        carritoDentro.innerHTML=""
    }else{//SI YA EXISTE HAY QUE BUSCAR EN EL CARRITO EL QUE ESTA REPETIDO E INCREMENTARLO EN UNO//
        const encontrar=carrito.find((prod)=>prod.id===id)
        encontrar.cantidad++
        carritoDentro.innerHTML=''
        }
        //CARGA LOS CAMBIOS EN EL LOCAL STORAGE
        localStorage.setItem("carrito",JSON.stringify(carrito));
        //LOS MUESTRA EN EL CARRITO
        carritoMostrar();
        }
    

function carritoMostrar(){
    carrito.forEach((prod)=>{
        carritoDentro.innerHTML+=`
        <div class="row" id="row-${prod.id}">
        <img src="${prod.img}" alt="${prod.alt}">
        <p>${prod.nombre}</p>
        <p>id: ${prod.id}</p>
        <p>$${(prod.precio*prod.cantidad)}</p>
        <p>cantidad: ${parseInt(prod.cantidad)}</p>
        <button class="eliminar" id=eliminar-${prod.id}><img src="./img/close.png"></button>
        </div>
        `;
        //TOMA BOTON DE ELIMINAR
        const eliminar=document.querySelectorAll(".eliminar");
        eliminarCarrito(eliminar)
    }
    )
    /////SI EL CARRITO NO TIENE NADA, LE DECIMOS QUE NO HAY PRODUCTOS EN EL CARRITO//
    if(carrito.length<=0){
        carritoDentro.innerHTML=`
        <h2>no hay productos en tu carrito</h2>
        `
    }
}

function eliminarCarrito(eliminar){
    eliminar.forEach((boton)=>{
        boton.addEventListener("click",(e)=>{
            e.preventDefault();
            ///RECORRE EL CARRITO PARA BUSCAR UN PRODUCTO QUE CONTENGA EL ID DE NUESTRO BOTON
            const buscar=carrito.find((prod)=>boton.id.includes(prod.id));
            buscar.cantidad--;//DISMINUYE CANTIDAD EN UNO
            const indexBuscar=carrito.indexOf(buscar)//ENCUENTRA EL INDICE DEL PRODUCTO QUE QUEREMOS ELIMINAR EN EL CARRITO//
            //SI LA CANTIDAD DEL PRODUCTO QUE QUEREMOS ELIMINAR ES MENOR O IGUAL A 0, QUE SALGA DEL CARRITO//
            if(buscar.cantidad<=0){
                carrito.splice(indexBuscar,1)//ELIMINA AL PRODUCTO DEL CARRITO POR MEDIO DEL INDICE
                console.log(carrito)
                localStorage.setItem("carrito",JSON.stringify(carrito))
            }
            localStorage.setItem("carrito",JSON.stringify(carrito))
            carritoDentro.innerHTML=''
            carritoMostrar()
        })
    })
}

