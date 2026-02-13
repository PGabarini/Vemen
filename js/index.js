
const fondosHero = [
            "imagenes/autoelectrico.png",
            "imagenes/autoelectrico2.png",
            "imagenes/autoelectrico3.png"
        ];
let i = 0;

document.addEventListener('DOMContentLoaded', () => {

    marcarHeader()

    const herobg = document.getElementsByClassName('hero__bg')[0]

    if(herobg){

        const topHero = document.querySelector('.layer.top');
        const bottomHero = document.querySelector('.layer.bottom');
        bottomHero.style.backgroundImage = `url(${fondosHero[0]})`;
        
        const preload = fondosHero.map(src => {
                return new Promise(resolve => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                });
            });

            
        Promise.all(preload).then(() => {   

            cambiarImagen(fondosHero,bottomHero,topHero)

            })
    }


});





function cambiarImagen(lista,bottom,top){

    bottom.style.backgroundImage = `url(${lista[0]})`;

    setInterval(() => {

        i = (i + 1) % lista.length;

        top.style.backgroundImage = `url(${lista[i]})`;
        top.style.opacity = 1;
        

        setTimeout(() => {
            bottom.style.backgroundImage = top.style.backgroundImage;
            top.style.opacity = 0;
            top.style.transform = 'scale(1)';
        }, 1200);

    }, 5000);
}

function marcarHeader(){
    const ventana = window.location.pathname
    const longitud = ventana.split('/').length
    const ventanaActual = ventana.split('/')[longitud-1]
    
    switch(ventanaActual){
        case "index.html": 
            console.log("inicio")
            const inicio = document.getElementById('inicio')
            inicio.classList.add('enVentana')
            break


        case "contacto.html":
            console.log("contacto")
            var contacto = document.getElementById('contacto')
            contacto.classList.add('dentro')
            break

        case "gracias.html":
            console.log("gracias")
            break


        case "productos.html":
            console.log("productos")
            var productos = document.getElementById('productos')
            productos.classList.add('enVentana')
            break

        case "detalle30k.html":
            console.log("detalle30k")
            
            var productos = document.getElementById('productos')
            productos.classList.add('enVentana')            
            break

        case "detalle60k.html":
            console.log("detalle60k")
            console.log("productos")
            var productos = document.getElementById('productos')
            productos.classList.add('enVentana')            
            break
        
    }

}