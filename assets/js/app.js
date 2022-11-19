const div1 = document.querySelector("#div1")
const div2 = document.querySelector("#div2")
const div3 = document.querySelector("#div3")
const div4 = document.querySelector("#div4")
let color

document.addEventListener('keydown', function (e) {
if (e.key === 'a' || e.key === 'A') {
  color = "blue"}
else if (e.key === 's' || e.key === 'S') {
  color = "green"}
else if (e.key === 'd' || e.key === 'D') {
  color = "yellow"}
})

div1.addEventListener ("click", () =>{
  div1.style.backgroundColor = color;
});
div2.addEventListener ("click", () =>{
  div2.style.backgroundColor = color;
});
div3.addEventListener ("click", () =>{
  div3.style.backgroundColor = color;
});
div4.addEventListener ("click", () =>{
  div4.style.backgroundColor = color;
});