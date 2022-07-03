
const body = document.querySelector("body");
const bigBox = document.createElement('div');
body.appendChild(bigBox);

bigBox.classList.add("bigbox")
for (let i=0; i < (16**2); i++){
const gridBox = document.createElement('div');
bigBox.appendChild(gridBox);
gridBox.classList.add("box", "item");
gridBox.addEventListener("mouseover",()=>{
    gridBox.classList.add("hover")
})
};



