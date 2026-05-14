// 🔹 Button color change
function changeColor() {
    let btn = document.getElementById("colorBtn");
    btn.style.background = "red";
}

// 🔹 Alert based on time
function showAlert() {
    let hour = new Date().getHours();
    if(hour < 12) alert("Good Morning!");
    else if(hour < 18) alert("Good Afternoon!");
    else alert("Good Evening!");
}

// 🔹 Form submit
function submitForm() {
    let name = document.getElementById("name").value;
    alert("Hello " + name);
}

// 🔹 Calculator
function calculate() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (n1 + n2);
}

// 🔹 Hamburger menu
function toggleMenu() {
    let nav = document.getElementById("nav-links");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// 🔹 Image enlarge
function enlarge(img) {
    img.style.width = "300px";
}

// 🔹 Slideshow
let images = [
    "https://picsum.photos/300?random=1",
    "https://picsum.photos/300?random=2",
    "https://picsum.photos/300?random=3"
];

let i = 0;
setInterval(() => {
    document.getElementById("slide").src = images[i];
    i = (i + 1) % images.length;
}, 2000);