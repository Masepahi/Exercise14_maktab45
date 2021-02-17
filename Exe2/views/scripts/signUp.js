console.log('test');

$(document).ready(function () {
  $("#submitBtn").on("click", function () {
    $.ajax({
      type: "POST",
      url: "/signUp",
      success: function (success) {
        console.log(success);
    
      }
    });
  });
});

let rePass = $('#rePassword');
let password = $('#password');
let button = $('#submitBtn');

