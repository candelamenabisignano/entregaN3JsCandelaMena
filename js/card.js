
const cardContainer=document.querySelector(".cardContainer")

async function cargarCards(){
   fetch("object.json") 
   .then((response)=>response.json())
   .then((json)=>json.forEach((el)=>{
    const card=document.createElement("div");
    card.classList.add("card")
    card.innerHTML+=`
    <div class="cardImg">
    <img src="${el.img}" alt="${el.alt}">
    </div>
    <div class="cardInfo">
    <p>${el.nombre}</p>
    <p>$${el.precio}</p>
    <a href=""><button class="agregar" id="agregar-${el.id}">agregar</button></a>
    </div>
    `
    cardContainer.append(card)
    const agregar=document.getElementById(`agregar-${el.id}`)
    agregar.addEventListener("click",(e)=>{
        e.preventDefault();
        agregarCarrito(el.id, json)
    })
    }
    )
    )
    
}

cargarCards()




