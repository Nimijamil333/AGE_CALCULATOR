
//TO CALCULATE AGE USING JAVASCRIPT FUNCTIONS 
var dob = new Date("July 25,2000");
var dobmilli = dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmilli ; 
var dobinyears = diff / (1000*60*60*24*30*12) ;
console.log()
var age = Math.round(dobinyears);
console.log(age)