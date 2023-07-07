


const party = document.getElementById("party");




function changeColor() {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    
}



party.addEventListener("mousemove", changeColor);
changeColor();