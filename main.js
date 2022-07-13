//menu active
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('header nav')

menuBtn.onclick = () => {
    menu.classList.toggle('active')
}


// tab content
const tabBtns = document.querySelectorAll('.tab-btn')
const tabContents = document.querySelectorAll('.tab .content')

tabBtns.forEach((btn, i) => {
    btn.onclick = () => {
        tabBtns.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));
        tabBtns[i].classList.add("active");
        tabContents[i].classList.add("active")
    }
})

// faq toggle
const FAQ = document.querySelectorAll(".faq-list");

FAQ.forEach(faq => faq.onclick = () => faq.classList.toggle("active"))

