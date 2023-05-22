


class producto{
    nombre;
    precio; 
    id; 
    alt;
    img;
    constructor(nombre,precio,id,alt,img,cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.id=id;
        this.alt=alt;
        this.img=img;
        this.cantidad=cantidad
    }
    }
const productos=[
    new producto("buzo rojo nike", 30000,"K2s8iP6uyg", "buzo-nike-rojo","./img/buzoRojoNike.png",1),
    new producto('zapatillas nike rosas', 40000,"yGLYbj0ea2", "zapatillas-nike-rosas","./img/zapatilla1.png",1),
    new producto("remera nike negra", 20000,"hksj931mdQ", "remera-nike-negra","./img/remeraNike.png",1),
    new producto("remera adidas blanca",15000,"Datyde78On","remera-adidas-blanca", "./img/remeraAdidasBlanca.png",1),
    new producto("zapatillas new balance rojas y azules",25000,"Z0UHisuhsy","zapatillas-new-balance-rojas-y-azules", "./img/zapatilla.png",1),
]


