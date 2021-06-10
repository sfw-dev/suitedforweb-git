

function sayHello() {
    document.getElementById("menu"); 
    console.log('red');
}

sayHello();

document.querySelector("li").classList.toggle("java1");
console.log("2 in");

let buttonTest = document.getElementsByClassName("btn")[3];

buttonTest.addEventListener("click", function(){
    buttonTest.className = "java1";
    console.log("click");
})


let drop = document.getElementsByClassName("burger-button")[0];
let menu = document.getElementsByClassName("menu")[0];
drop.addEventListener ("click", function(){
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}) 



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }