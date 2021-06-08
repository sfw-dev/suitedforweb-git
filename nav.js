
// let menu = document.getElementById("menu");
// let menuItems = document.getElementById("menuItems");

// let button = document.getElementsByTagName("button")[0];

// need to specifify button [0] because you need to use method on the actual element not the array




// button.addEventListener("click", function(){
//     if (menu.style.display === "block" ){
//         menu.style.display = "none";
//     }
//     else {
//         menu.style.display = "block";
//     }
// })

// window.addEventListener("resize", function(){
//     if (menuItems.style.display === "block"){
//         menuItems.style.display = "none";
//     }
//     else {
//         menuItems.style.display = "block";
//     }
// })


function sayHello() {
    document.getElementById("menu"); 
    console.log('red');
}

sayHello();


// document.querySelector("h1").style.background = "blue";

// var h1 = document.querySelector("h1");
// h1.className = "java";
// console.log("java");

// var burger = document.querySelector("nav");
// burger.className = "java";
// console.log("menu");

// let tagNameTest = document.querySelector("nav");
// tagNameTest.className = "java"; 

// let getAttributeTest = document.querySelector("img");
// getAttributeTest.className = "java1";

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

// if (menu.style.display === "block") {
//     menu.style.display = "none";
// } else if {
//     menu.style.display = "block";
// }


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }