let carousel= document.querySelector("#carousel");

let arrayOfImages=[
    "assets\\images\\Anime-silder-1920-1920x450.webp",
    "assets\\images\\rick-and-morty-slider-1-1920-1920x450.webp",
    "assets\\images\\harry-potter-battle-image@0,5x.webp"];

    let i=0;
    setInterval(()=>{
        carousel.src=`${arrayOfImages[i]}`;
        i+=1;
        i>2?i=0:i=i;},5000);
    
    