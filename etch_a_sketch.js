const container = document.querySelector("#flex-container");
const bigBox = document.createElement("div");
container.appendChild(bigBox);

let red = document.querySelector("#redChoice");
let black = document.querySelector("#blackChoice");
var x ="";
red.addEventListener("click", ()=>{
 x = "hoverRed"
 console.log(x)
})
black.addEventListener("click", ()=>{
  x = "hoverBlack"
  console.log(x)
})

bigBox.classList.add("bigbox");
function restart(num) {
  let boxArray = document.querySelectorAll(".item");
  boxArray.forEach((box) => {
    box.remove();
  });
  for (let i = 0; i < num ** 2; i++) {
    const gridBox = document.createElement("div");
    bigBox.appendChild(gridBox);
    gridBox.classList.add("box", "item");
    gridBox.style.width = 512 / num + "px";
    gridBox.style.height = 512 / num + "px";
    gridBox.addEventListener("mousedown", (e) => {
      if (e.buttons == 1) {
        gridBox.classList.add(x);
        console.log(x)
      }
    });
    gridBox.addEventListener("mouseover", (e) => {
      if (e.buttons == 1) {
        gridBox.classList.add(x);
        console.log(x)
      }
    });
  }
}
let btn = document.querySelector("#gridChoice");
btn.addEventListener("click", (e) => {
  let size = prompt("how many squares accros for sketchpad?");
  restart(size);
});
