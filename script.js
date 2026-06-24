// Destacar item do menu conforme a seção visível
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Animação ao aparecer na tela
const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Rolagem suave para os links do menu
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Efeito de digitação no título
const title = document.querySelector("header h1");
const text = title.textContent;
title.textContent = "";

let index = 0;

function typeWriter() {
    if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }
}

window.addEventListener("load", typeWriter);