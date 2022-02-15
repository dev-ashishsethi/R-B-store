let slider= document.querySelector("#rating-slider");
let firstStar= document.querySelector("#first-star");
let secondStar= document.querySelector("#second-star");
let thirdStar= document.querySelector("#third-star");
let fourthStar= document.querySelector("#fourth-star");
let fifthStar= document.querySelector("#fifth-star");

firstStar.style.color="#FFD700";

const sliderColor= ()=>{
    if(slider.value==="1"){
        firstStar.style.color="#FFD700";
        secondStar.style.color="white";
        thirdStar.style.color="white";
        fourthStar.style.color="white";
        fifthStar.style.color="white";
    }else if(slider.value==="2"){
        firstStar.style.color="#FFD700";
        secondStar.style.color="#FFD700";
        thirdStar.style.color="white";
        fourthStar.style.color="white";
        fifthStar.style.color="white";
    }else if(slider.value==="3"){
        firstStar.style.color="#FFD700";
        secondStar.style.color="#FFD700";
        thirdStar.style.color="#FFD700";
        fourthStar.style.color="white";
        fifthStar.style.color="white";
    }else if(slider.value==="4"){
        firstStar.style.color="#FFD700";
        secondStar.style.color="#FFD700";
        thirdStar.style.color="#FFD700";
        fourthStar.style.color="#FFD700";
        fifthStar.style.color="white";
    }else{
        firstStar.style.color="#FFD700";
        secondStar.style.color="#FFD700";
        thirdStar.style.color="#FFD700";
        fourthStar.style.color="#FFD700";
        fifthStar.style.color="#FFD700";
    }
    
    
};

slider.addEventListener("input",sliderColor);

