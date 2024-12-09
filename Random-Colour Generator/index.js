const containerEl = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("colour-container");
    containerEl.appendChild(colorContainerEl);
    
}

const colorContainerEls = document.querySelectorAll(".colour-container")

generateColors();
function generateColors(){
    colorContainerEls.forEach(
        (colorContainerEl)=> {
            const newColorCode = randomCharacter();
            colorContainerEl.style.backgroundColor ="#" + newColorCode;
            colorContainerEl.innerText = "#" + newColorCode;

        
        }
    )
}

function randomCharacter(){
    const charac = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = ""
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*charac.length);
        colorCode+=charac.substring(randomNum,randomNum+1)
    
        
    }
    return colorCode   
}