

$(document).ready(function () {
    $("#show").click(function () {
        $(".button1").show();

    });

    $("#show1").click(function () {
        $(".button2").show();

    });

    $("#show2").click(function () {
        $(".button3").show();

    });

    $("#show3").click(function () {
        $(".button4").show();

    });

    $("#show4").click(function () {
        $(".button").show();

    });
    //fonction player
    $("#player").click(function () {
        document.querySelector("#myAudio").play();

    });


});





// $(function() {

//     var $list, $newItemForm;
//     $list = $('ul');
//     $newItemForm = $('#newItemForm');

//     $newItemForm.on('submit', function(e) {
//       e.preventDefault();
//       var text = $('input:text').val();
//       $list.append('<li>' + text + '</li>');
//       $('input:text').val('');
//     });

//     $list.on('click', 'li', function() {
//       var $this = $(this);
//       $this.remove();
//     });

//   });

