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
    return startingId;
}

// Creating the Constructor //
const menuItems = [];
function Menu(itemName, itemType, itemPrice){
    this.itemID = function(){return idGenerator()};
    this.itemName = itemName;
    this.itemType = itemType;
    this.itemPrice = itemPrice;
    menuItems.push(this);
}

// Adding to Local Storage //

function saveToLocalStorage(){
    let stringifiedData = JSON.stringify(menuItems);
    localStorage.setItem("menu", stringifiedData);
}

// Getting Data from Local Storage //

function getDataFromLocalStorage(){
    let data = localStorage.getItem("menu");
    let parseData = JSON.parse(data);

    if (parseData !== null) {
    for (let i = 0; i < parseData.length; i++) {
        new Menu(parseData[i].itemName, parseData[i].itemType, parseData[i].itemPrice)
    }}
}

// Fetching the form elements //

let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let itemName = event.target.foodName.value;
    let itemType = event.target.itemType.value;
    let itemPrice = event.target.price.value;
    new Menu(itemName, itemType, itemPrice);
    saveToLocalStorage();

    let audio = new Audio("sound.mp3");
    audio.play();
    form.reset();
}

getDataFromLocalStorage();