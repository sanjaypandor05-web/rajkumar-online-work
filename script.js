document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".contact-btn");

    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            window.location.href = "tel:9429193151";
        });
    });
});