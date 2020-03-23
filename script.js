// jQuery Homework
// $(function() {
//     $(".container .btn").on("click", function () {
//         $(".selection").text("You clicked " + $(this).text() + " button")
//     });
// })


// jQuery Event Delegation
$(".container").on("click", ".btn", function () {
    $(".selection").text("You clicked " + $(this).text() + " button")
});