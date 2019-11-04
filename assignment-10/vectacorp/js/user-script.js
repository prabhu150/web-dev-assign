/*
I have chosen to include all my code in a single external file instead of embedding my script in 5 different files. This makes it easy for me to modify and test my code and for the grader to easily see what I have done in a single file.
*/
$(document).ready( function(){

$('#responsive-menu').mobileMenu();
$('nav > ul > li > a').prop('title','someTitle'); // needed for jquery ui to work

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

$("#tabs").tabs({
    collapsible: true,
});

$("#testimonial-accordion").accordion();
$("#management").tabs().addClass("ui-tabs-vertical ui-helper-clearfix")
$("#management li").removeClass("ui-corner-top").addClass("ui-corner-left")

$("#sticky-navbar").sticky({topSpacing : 20})

$(".top").on('click', function(){
    $.smoothScroll()
    return false
})

$('#solution-1-link').on('click', function () {
    $.smoothScroll({
      scrollTarget: '#solution-1'
    })
    return false
  })
  $('#solution-2-link').on('click', function () {
    $.smoothScroll({
      scrollTarget: '#solution-2'
    })
    return false
  })
  $('#solution-3-link').on('click', function () {
    $.smoothScroll({
      scrollTarget: '#solution-3'
    })
    return false
  })

  $(".checkbox-and-radio").checkboxradio()
  $("#numEmployees").selectmenu()
  // $("#submitForm").button()


});