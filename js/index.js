
const fondosHero = [
            "imagenes/autoelectrico.png",
            "imagenes/autoelectrico2.png",
            "imagenes/autoelectrico3.png"
        ];
let i = 0;

document.addEventListener('DOMContentLoaded', () => {


    const herobg = document.getElementsByClassName('hero__bg')[0]

    if(herobg){

        const preload = fondosHero.map(src => {
                return new Promise(resolve => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                });
            });

            
        Promise.all(preload).then(() => {
            const topHero = document.querySelector('.layer.top');
            const bottomHero = document.querySelector('.layer.bottom');
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