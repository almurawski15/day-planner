$(document).ready(function() {
    var dateLog = $("#currentday");
    var todayDate = moment().format('dddd, MMMM Do YYYY');
    dateLog.text(todayDate);
});


//Saves the user's input of description in each appointment slot

var inputText1 = document.querySelector('#appt1');
var saveInput1 = document.querySelector('#saveAppt1');
//retrieves input of text
inputText1.value = localStorage.getItem('content1');
//Stores the input of text upon click of save button
saveInput1.addEventListener('click', saveContent1);
//Stores the input of text to local storage
function saveContent1() {
    localStorage.setItem('content1', inputText1.value)
};
