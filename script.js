// ===============================
// AUTOXPAT HOPE PROJECT
// script.js
// ===============================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Update footer year automatically
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
    `© ${new Date().getFullYear()} Autoxpat Hope Project<br>
    Thank you for your kindness and support.`;
}

// Welcome message in browser console
console.log("Welcome to the Autoxpat Hope Project website.");
