
//open hamburger menu functie
const openHamburgerMenu = function(){
    var x = document.getElementById("unordered-list");
    if (x.style.display  === "block") {

        x.style.display = "none";
    }else {
        x.style.display = "block";
    }
};

// Open hamburger menu bij hoveren --> wanneer ik deze gebruik dan sluit het menu wanneer ik over de lijst heen hover
// document.getElementById("btn-toggle-nav").addEventListener("mouseover", openHamburgerMenu);

// Open hamburger menu bij klikken
document.getElementById("btn-toggle-nav").addEventListener("click",  openHamburgerMenu);

// Sluit hamburger menu
const closeHamburgerMenu = function(){
var x = document.getElementById("undordered-list");
if (x.style.display === "none"){
    x.style.display = "block";
} else {
    x.style.display ="none";
}};

//functie achtergrondkleur veranderen
function changeBackground(bgColor){
    document.body.style.background = bgColor;
    document.getElementById("hoofdtekst").textContent ="You chose " + bgColor + "!";
    document.getElementById("extra").textContent= bgColor +"!";
};


