let soat = document.querySelector(".taym");
let haur = document.querySelector(".haur");
let mint = document.querySelector(".mint");
let sekond = document.querySelector(".sekond");

let month =document.querySelector(".month")
let day =document.querySelector(".day")
let year =document.querySelector(".year")
let body = document.querySelector("body");
setInterval(() => {
  let deyt = new Date();
 
  haur.innerHTML = deyt.getHours().toString().padStart(2, "0");
  mint.innerHTML = deyt.getMinutes().toString().padStart(2, "0");
  sekond.innerHTML = deyt.getSeconds().toString().padStart(2, "0");
  
  month.innerHTML=deyt.getMonth().toString()
  day.innerHTML=deyt.getDate().toString()
  year.innerHTML=deyt.getFullYear().toString()


}, 1000);
