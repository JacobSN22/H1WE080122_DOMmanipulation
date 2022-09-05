function ex1() {
    document.querySelector("h1").innerText = "Det virker sku";
}

function ex2() {
    document.querySelectorAll("p").forEach(e => e.style.color = "red");
}

function ex3() {
    document.querySelectorAll("li").forEach(e => e.style.transform = "rotate(20deg)");
}

function ex4() {
    document.querySelector("h1").classList.toggle("hide")
    document.querySelector("h2").classList.toggle("hide")
    document.querySelector("h3").classList.toggle("hide")
    document.querySelector("h4").classList.toggle("hide")
}

function ex5() {
    document.querySelector("a").classList.toggle("fontStyle")
}

function ex6(){
    const litag = document.createElement("li");
    litag.innerText = "This is a new li tag";

    document.getElementById("myOl").appendChild(litag);
}

function ex7() {
    document.querySelectorAll('ol li:nth-child(2n)').forEach(e => e.style.color = "red");
    document.querySelectorAll('ul li:nth-child(2n)').forEach(e => e.style.color = "red");
    
}

function ex8() {
    
}