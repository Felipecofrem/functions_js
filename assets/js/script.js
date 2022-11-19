//Modificar

// function pintar(){
//     ele = document.getElementById("ele1")
//     ele.style.backgroundColor = 'yellow'
//     }
//     ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);


ele = document.querySelector("#ele1")
ele.addEventListener ("click", function(){
ele.style.backgroundColor = "yellow"
})



ele.style.backgroundColor = 'green'
function pintar(color="green"){
    ele.style.backgroundColor=color;
}
ele.addEventListener("click", ()=>{
ele.style.backgroundColor= 'yellow'
})