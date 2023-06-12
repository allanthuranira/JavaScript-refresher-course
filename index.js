//JS getting month, days and time methods

var date = new Date();
var day = date.getDay();
var daylist = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

var year = date.getFullYear();
var month = date.getMonth() + 1;

var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();




console.log(year, month);

console.log(daylist[day], hours, minutes, seconds);





