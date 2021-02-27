let today = moment();
$("#currentDay").text(today.format("dddd,MMMM, Do"));

let currentTime = moment().format("H");
console.log(currentTime);


//Saves the user's input of description in each time slot (9-5)

let input9 = document.querySelector("#nine");
let saveInput9 = document.querySelector("#save9");

input9.value = localStorage.getItem("content9");
save9.addEventListener("click", updateOutput9);
function updateOutput9() {
    localStorage.setItem("content9", input9.value);
};

let input10 = document.querySelector("#ten");
let saveInput10 = document.querySelector("#save10");

input10.value = localStorage.getItem("content10");
save10.addEventListener("click", updateOutput10);
function updateOutput10() {
    localStorage.setItem("content10", input10.value);
};

let input11 = document.querySelector("#eleven");
let saveInput11 = document.querySelector("#save11");

input11.value = localStorage.getItem("content11");
save11.addEventListener("click", updateOutput11);
function updateOutput11() {
    localStorage.setItem("content11", input11.value);
};

let input12 = document.querySelector("#twelve");
let saveInput12 = document.querySelector("#save12");

input12.value = localStorage.getItem("content12");
save12.addEventListener("click", updateOutput12);
function updateOutput12() {
    localStorage.setItem("content12", input12.value);
};

let input13 = document.querySelector("#thirteen");
let saveInput13 = document.querySelector("#save13");

input13.value = localStorage.getItem("content13");
save13.addEventListener("click", updateOutput13);
function updateOutput13() {
    localStorage.setItem("content13", input13.value);
};

let input14 = document.querySelector("#forteen");
let saveInput14 = document.querySelector("#save14");

input14.value = localStorage.getItem("content14");
save14.addEventListener("click", updateOutput14);
function updateOutput14() {
    localStorage.setItem("content14", input14.value);
};

let input15 = document.querySelector("#fifteen");
let saveInput15 = document.querySelector("#save15");

input15.value = localStorage.getItem("content15");
save15.addEventListener("click", updateOutput15);
function updateOutput15() {
    localStorage.setItem("content15", input15.value);
};

let input16 = document.querySelector("#sixteen");
let saveInput16 = document.querySelector("#save16");

input16.value = localStorage.getItem("content16");
save16.addEventListener("click", updateOutput16);
function updateOutput16() {
    localStorage.setItem("content16", input16.value);
};

let input17 = document.querySelector("#seventeen");
let saveInput17 = document.querySelector("#save17");

input17.value = localStorage.getItem("content17");
save17.addEventListener("click", updateOutput17);
function updateOutput17() {
    localStorage.setItem("content17", input17.value);
};

//Defines the css color variations based on the hour of the day 
var now = new Date().getHours();

if (now > 9) {
    $("#nine").addClass("past");
    }
    else if (now >= 9 && now < 10) {
        $("#nine").addClass("present");
    }
    else if (now < 9) {
        $("#nine").addClass("future");
    }

if (now > 10) {
    $("#ten").addClass("past");
    }
    else if (now >= 10 && now < 11) {
        $("#ten").addClass("present");
    }
    else if (now < 10) {
        $("#ten").addClass("future");
    }

if (now > 11) {
    $("#eleven").addClass("past");
    }
    else if (now >= 11 & now < 12) {
        $("#eleven").addClass("present");
    }
    else if (now < 11) {
        $("#eleven").addClass("future");
    }

if (now > 12) {
    $("#twelve").addClass("past");
    }
    else if (now >= 12 && now < 13) {
        $("#twelve").addClass("present");
    }
    else if (now < 12) {
        $("#twelve").addClass("future");
    }

if (now > 13) {
    $("#thirteen").addClass("past");
    }
    else if (now >= 13 && now < 14) {
        $("#thirteen").addClass("present");
    }
    else if (now < 13) {
        $("#thirteen").addClass("future");
    }

if (now > 14) {
    $("#forteen").addClass("past");
    }
    else if (now >= 14 && now < 15) {
        $("forteen").addClass("present");
    }
    else if (now < 14) {
        $("#forteen").addClass("future");
    }

if (now > 15) {
    $("#fifteen").addClass("past");
    }
    else if (now >= 15 && now < 16) {
        $("#fifteen").addClass("present");
    }
    else if (now < 15) {
        $("#fifteen").addClass("future");
    }

if (now > 16) {
    $("#sixteen").addClass("past");
    }
    else if (now >= 16 && now < 17) {
        $("#sixteen").addClass("present");
    }
    else if (now < 16) {
        $("#sixteen").addClass("future");
    }

if (now > 17) {
    $("#seventeen").addClass("past");
    }
    else if (now >= 17 && now < 18) {
        $("#seventeen").addClass("present");
    }
    else if (now < 17) {
        $("#seventeen").addClass("future");
    }