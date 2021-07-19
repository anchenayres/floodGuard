//week 2 slides
// jQuery Code Here
//we use $ to refer to jQuery
$(document).ready(function() {


    //console
    console.log("Document Ready & jQuery Added"); //when the document is ready execute the code

    //put all jQuery INSIDE

    //same as document.getElementById()
    //$() = selecting all "h1" ELEMENTS
    $("h1").text("HHHHHHHHHHHH");

    //select something with ID
    $("#idName")

    //select something with CLASS
    $(".className")

    //changing text in a CLASS / ID in term 1
    //document.getElementById("idName").textContent = "Text"
    //document.getElementById("idName").innerHTML = "Text"

    //changing text in paragraph - select something with ID using #
    //use .text(---) to change text in the paragraph
    $("#idName p").text("Hello World")

    //use .html(---) to change the innerHTML of an element
    $(".className").html(updatedText)

    //STEPS
    //1. $()
    //2. .this(---)
    //3. --- thing we want to change to 
});

//$(---) = select the ---
// .ready() = event that happens to the selected thing (--- = what we want to happen when it happens
// .ready() = just the event wanted to happen, DOCUMENT is ready

