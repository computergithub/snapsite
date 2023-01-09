
let fastUpBtn = document.querySelector("#fstUpBtn");
let  fstList= document.querySelector(".fst-list");
let fstDownBtn = document.querySelector("#fstDownBtn");

fstDownBtn.addEventListener('click', ()=>{
    fastUpBtn.style.display="block"
    fstList.style.display="block"
    fstDownBtn.style.display="none"
})
let offbtn = () => {
    fastUpBtn.style.display="none"
    fstList.style.display="none"
    fstDownBtn.style.display="block"
}
fastUpBtn.addEventListener('click', offbtn);

// ----------------------- company hide btn------------------------------
let upBtn = document.querySelector("#upBtn");
let  scndList= document.querySelector(".scnd-list");
let downBtn = document.querySelector("#downBtn");
 
downBtn.addEventListener('click', ()=>{
    upBtn.style.display="block"
    scndList.style.display="block"
    downBtn.style.display="none"
})

let closs =()=>{
upBtn.style.display="none"
scndList.style.display="none"
downBtn.style.display="block"
}
upBtn.addEventListener('click',closs);


// -----------------------bugger btn-----------------------

let opanList=document.querySelector("#opanList");
let clossList=document.querySelector("#clossList");
let navList=document.querySelector("#nav");

opanList.addEventListener('click', ()=>{
opanList.style.display="none";
clossList.style.display="block";
navList.style.display="block";
})
let listCloss = ()=>{
    opanList.style.display="block";
clossList.style.display="none";
navList.style.display="none";
}
clossList.addEventListener('click',listCloss);

// -----------------------End js-----------------------