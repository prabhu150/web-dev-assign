/*
I have chosen to include all my code in a single
external file instead of embedding my script in 5 different files.
This makes it easy for me to modify and test my code and for the grader
to easily see what I have done in a single file.

*/



$(document).ready( function(){

$('#responsive-menu').mobileMenu();

$('nav > ul > li > a').prop('title','someTitle');

$("#homelink").tooltip({
    content : "Vecta Corporation provides scalable business solutions to help companies achieve success"
})


$("#aboutlink").tooltip({
    content : "Learn more about VectaCorp and its business policies"
})


$("#solutionslink").tooltip({
    content : "Vecta Corp. offers 3 solutions for prospecting, converting, and retaining customers."
})


$("#supportlink").tooltip({
    content : "Learn more about our technical resources and our team"
})


$("#contactlink").tooltip({
    content : "Contact us for additional support/training"
})





});