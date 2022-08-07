'use strict';

// Navigation Bar Styling //

let ClassName = "header-scroll";
let scrollTrigger = 150;

window.onscroll = function () {
    if (window.screenY >= scrollTrigger || window.pageYOffset >= scrollTrigger){
        document.getElementsByTagName("nav")[0].classList.add("header-scroll")
    } else {
        document.getElementsByTagName("nav")[0].classList.remove("header-scroll")
    }
}

// Creating ID Numbers //

let startingId = 0;
function idGenerator() {
    startingId += 1;
    return console.log(startingId);
}

// Creating the Constructor //

function Menu(itemName, itemType, itemPrice){
    this.itemID = function() {return idGenerator()};
    this.itemName = itemName;
    this.itemType = itemType;
    this.itemPrice = itemPrice;
}