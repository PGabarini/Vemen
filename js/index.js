
document.addEventListener('DOMContentLoaded', function() {

    const herobg = document.getElementsByClassName('hero__bg')[0]
    if(herobg){
        cambiarPager(herobg)
    }else{
        console.log("no hay")
    }
    

});

const fondos = ["imagenes/autoelectrico2.png","imagenes/autoelectrico.png"]
let turnoFondo = 0

function cambiarPager(herobg){
    

    setInterval(()=>{
        

        fondoactual =  fondos[turnoFondo]

        herobg.style.background = `url(${fondoactual}) center / cover no-repeat`;

        turnoFondo = (turnoFondo + 1) % fondos.length

        
    },3000)
}