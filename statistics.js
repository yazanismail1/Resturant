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

// Getting Data from Local Storage //

function getDataFromLocalStorage(){
    let data = localStorage.getItem("menu");
    let parseData = JSON.parse(data);

    if (parseData !== null){
    for (let i = 0; i < parseData.length; i++) {
        new Menu(parseData[i].itemName, parseData[i].itemType, parseData[i].itemPrice)
    }}
    renderData();
}

// Prototype to write to in the HTML //

Menu.prototype.writeToHTML = function() {
    let table = document.getElementById("table");

    let tableRow = document.createElement("tr");
    tableRow.setAttribute("class", "data");

    let idRow = document.createElement("td");
    idRow.setAttribute("class", "data");
    idRow.textContent = `${this.itemID()}`;
    tableRow.appendChild(idRow); 

    let nameRow = document.createElement("td");
    nameRow.setAttribute("class", "data");
    nameRow.textContent = `${this.itemName}`;
    tableRow.appendChild(nameRow); 

    let typeRow = document.createElement("td");
    typeRow.setAttribute("class", "data");
    typeRow.textContent = `${this.itemType}`;
    tableRow.appendChild(typeRow); 

    let priceRow = document.createElement("td");
    priceRow.setAttribute("class", "data");
    priceRow.textContent = `${this.itemPrice} JD`;
    tableRow.appendChild(priceRow);

    table.appendChild(tableRow);

}

// Displaying Data on Screen //

function renderData() {
    for (let i = 0; i < menuItems.length; i++){
        menuItems[i].writeToHTML();
    }
}

getDataFromLocalStorage();