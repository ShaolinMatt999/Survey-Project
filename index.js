//Consts and groupings

const ul_1 = document.querySelector(".op1");
const ul_2 = document.querySelector(".op2");
const ul_3 = document.querySelector(".op3");
const ul_4 = document.querySelector(".op4");
const ul_5 = document.querySelector(".op5");

const q1 = document.querySelector(".q1")
const q2 = document.querySelector(".q2")
const q3 = document.querySelector(".q3")
const q4 = document.querySelector(".q4")
const q5 = document.querySelector(".q5")

const thanks = document.querySelector(".thanks")

//Click Actions thru questions

ul_1.addEventListener("click", function(){
    q1.style.display = "none";
    q2.style.display = "block";
});

ul_2.addEventListener("click", function(){
    q2.style.display = "none";
    q3.style.display = "block";
});

ul_3.addEventListener("click", function(){
    q3.style.display = "none";
    q4.style.display = "block";
});

ul_4.addEventListener("click", function(){
    q4.style.display = "none";
    q5.style.display = "block";
});

ul_5.addEventListener("click", function(){
    q5.style.display = "none";
    thanks.style.display = "block";
});

