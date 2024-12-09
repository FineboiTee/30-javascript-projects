const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-container");
const remainingEl = document.getElementById("Remaining");

textAreaEl.addEventListener("keyup", ()=>{
    updateCounter()
})




function updateCounter(){
  totalCounterEl.innerText =  textAreaEl.value.length;
  remainingEl.innerText  = textAreaEl.getAttribute("maxLength") -  textAreaEl.value.length;
}
