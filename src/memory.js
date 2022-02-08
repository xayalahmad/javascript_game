

count = 0
var firstcard
var secondcard
$(document).on("click", "#closecard1", function(){
    count++
    $("#closecard1").addClass("d-none")
    console.log(count)
    setTimeout(() => choosefunction(), 50); 
    if (count == 1){
        firstcard = $(this)
        selectionfirst = ($(this).data("cityname"))
        console.log(selectionfirst)
    }
    if (count == 2){
        secondcard = $(this)
        selectionsecond = ($(this).data("cityname"))
        console.log(selectionsecond)
    }
})
$(document).on("click", "#closecard2", function(){
    count++
    $("#closecard2").addClass("d-none")
    console.log(count)
    setTimeout(() => choosefunction(), 50); 
    if (count == 1){
        firstcard = $(this)
        selectionfirst = ($(this).data("cityname"))
        console.log(selectionfirst)
    }
    if (count == 2){
        secondcard = $(this)
        selectionsecond = ($(this).data("cityname"))
        console.log(selectionsecond)
    }
})
$(document).on("click", "#closecard3", function(){
    count++
    $("#closecard3").addClass("d-none")
    console.log(count)
    setTimeout(() => choosefunction(), 50); 
    if (count == 1){
        firstcard = $(this)
        selectionfirst = ($(this).data("cityname"))
        console.log(selectionfirst)
    }
    if (count == 2){
        secondcard = $(this)
        selectionsecond = ($(this).data("cityname"))
        console.log(selectionsecond)
    }
})
$(document).on("click", "#closecard4", function(){
    count++
    $("#closecard4").addClass("d-none")
    console.log(count)
    setTimeout(() => choosefunction(), 50); 
    if (count == 1){
        firstcard = $(this)
        selectionfirst = ($(this).data("cityname"))
        console.log(selectionfirst)
    }
    if (count == 2){
        secondcard = $(this)
        selectionsecond = ($(this).data("cityname"))
        console.log(selectionsecond)
    }
})
$(document).on("click", "#closecard5", function(){
    count++
    $("#closecard5").addClass("d-none")
    console.log(count)
    setTimeout(() => choosefunction(), 50); 
    if (count == 1){
        firstcard = $(this)
        selectionfirst = ($(this).data("cityname"))
        console.log(selectionfirst)
    }
    if (count == 2){
        secondcard = $(this)
        selectionsecond = ($(this).data("cityname"))
        console.log(selectionsecond)
    }
})
$(document).on("click", "#closecard6", function(){
    count++
    $("#closecard6").addClass("d-none")
    console.log(count)
    setTimeout(() => choosefunction(), 50); 
    if (count == 1){
        firstcard = $(this)
        selectionfirst = ($(this).data("cityname"))
        console.log(selectionfirst)
    }
    if (count == 2){
        secondcard = $(this)
        selectionsecond = ($(this).data("cityname"))
        console.log(selectionsecond)
    }
})
$(document).on("click", "#closecard7", function(){
    count++
    $("#closecard7").addClass("d-none")
    console.log(count)
    setTimeout(() => choosefunction(), 50); 
    if (count == 1){
        firstcard = $(this)
        selectionfirst = ($(this).data("cityname"))
        console.log(selectionfirst)
    }
    if (count == 2){
        secondcard = $(this)
        selectionsecond = ($(this).data("cityname"))
        console.log(selectionsecond)
    }
})
$(document).on("click", "#closecard8", function(){
    count++
    $("#closecard8").addClass("d-none")
    console.log(count)
    setTimeout(() => choosefunction(), 50); 
    if (count == 1){
        firstcard = $(this)
        selectionfirst = ($(this).data("cityname"))
        console.log(selectionfirst)
    }
    if (count == 2){
        secondcard = $(this)
        selectionsecond = ($(this).data("cityname"))
        console.log(selectionsecond)
    }
})

function choosefunction(){
    // if (count == 1){
    //     console.log(this)
    // }
    if (count == 2){
        // console.log(this)
        count = 0
        $("#closecard1").removeClass("d-none")
        $("#closecard2").removeClass("d-none")
        $("#closecard3").removeClass("d-none")
        $("#closecard4").removeClass("d-none")
        $("#closecard5").removeClass("d-none")
        $("#closecard6").removeClass("d-none")
        $("#closecard7").removeClass("d-none")
        $("#closecard8").removeClass("d-none")
        if (selectionfirst == selectionsecond){
            alert("True")
        // console.log(firstcard)
        firstcard.removeClass("d-none")
        firstcard.addClass("trueanswer")
        firstcard.attr("src", "./img/Flag_of_Libya_(1977–2011,_3-2).svg.png")

        secondcard.removeClass("d-none")
        secondcard.addClass("trueanswer")
        secondcard.attr("src", "./img/Flag_of_Libya_(1977–2011,_3-2).svg.png")



        if (($("#closecard1" ).hasClass('trueanswer')) && ($( "#closecard2" ).hasClass('trueanswer')) && ($( "#closecard3" ).hasClass('trueanswer')) && ($( "#closecard4" ).hasClass('trueanswer')) && ($( "#closecard5" ).hasClass('trueanswer')) && ($( "#closecard6" ).hasClass('trueanswer')) && ($( "#closecard7" ).hasClass('trueanswer')) && ($( "#closecard8" ).hasClass('trueanswer'))){
          $(".winsection").removeClass("d-none")


        }
            // console.log( $(this).data("cityname"))
            // $(this).data("cityname")
        }
        else{

            alert("False")
        }
    }
}