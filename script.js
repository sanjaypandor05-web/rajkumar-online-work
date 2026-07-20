// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// ===========================
// Image Slider
// ===========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

},3000);

// ===========================
// Service Click → Contact Form
// ===========================

function openForm(service){

    document.getElementById("contact").scrollIntoView({
        behavior:"smooth"
    });

    const select = document.querySelector(".contact-form select");

    if(select){
        select.value = service;
    }
}

// ===========================
// Contact Form → WhatsApp
// ===========================

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const mobile = document.querySelector('input[placeholder="Mobile Number"]').value;
    const service = document.querySelector("select").value;
    const message = document.querySelector("textarea").value;

    const text =
`*New Inquiry - Rajkumar Online Work*

👤 Name: ${name}
📞 Mobile: ${mobile}
🛠️ Service: ${service}
💬 Message: ${message}`;

    const url = "https://wa.me/919429193151?text=" + encodeURIComponent(text);

    window.open(url, "_blank");

});

}

