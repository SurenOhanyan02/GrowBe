export  function burger ()   {
let btn = document.querySelector(".btn")
let menu = document.querySelector(".menu")
let parentBurger = document.querySelector(".parent-burger")
let burger = document.querySelector(".burger")


parentBurger.addEventListener("click", function () {
    burger.classList.toggle("open")
    menu.classList.toggle("open-menu")
})
}
