const body = document.querySelector("body");
const bigBox = document.createElement("div");
body.appendChild(bigBox);

bigBox.classList.add("bigbox");
function restart(num){
  let boxArray = document.querySelectorAll(".item");
  boxArray.forEach(box=>{
    box.remove();
  }
  );
for (let i = 0; i < num ** 2; i++) {
  const gridBox = document.createElement("div");
  bigBox.appendChild(gridBox);
  gridBox.classList.add("box", "item");
  gridBox.style.width = (512/num)+"px";
  gridBox.style.height = (512/num)+"px";
  gridBox.addEventListener("mousedown", (e) => {
    if (e.buttons == 1) {
      console.log(e.buttons);
      gridBox.classList.add("hover");
    }
  });
  gridBox.addEventListener("mouseover", (e) => {
    if (e.buttons == 1) {
      console.log(e.buttons);
      gridBox.classList.add("hover");
    }
  });
}
}
let btn = document.querySelector("button")
btn.addEventListener('click',(e)=>{
  let size = prompt("how many squares accros for sketchpad?");
  restart(size);
})
