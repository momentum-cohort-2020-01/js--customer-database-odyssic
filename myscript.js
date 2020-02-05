for (let customer of customers) {
    container_block = document.querySelector("#container");

    container_block.classList.add("flex-box");

    const picture = document.createElement("img");
    const pictureDiv = container_block.parentElement.appendChild(picture);
    pictureDiv.classList.add("photos");

    picture.src = customer.picture.large;

    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
    capitalizeFirstLetter(customer.name.first) +
        " " +
        capitalizeFirstLetter(customer.name.last);
}

const name = document.createElement("div");
const nameDiv = container_block.parentElement.appendChild(name);
nameDiv.classList.add("name");

const email = document.createElement("div");
emailDiv = container_block.parentElement.appendChild(email);
emailDiv.classList.add("email");

const addressOne = document.createElement("div");
container_block.parentElement.appendChild(addressOne);

const addressTwo = document.createElement("div");
container_block.parentElement.appendChild(addressTwo);

const dateOfBirth = document.createElement("div");
container_block.parentElement.appendChild(dateOfBirth);

customerSince = document.createElement("div");
container_block.parentElement.appendChild(customerSince);

name.innerHTML = wholeName;
email.innerHTML = customer.email;
addressOne.innerHTML = customer.location.street;
addressTwo.innerHTML = customer.location.city;
dateOfBirth.innerHTML = customer.dob;
customerSince.innerHTML = customer.registered;

// var img = document.createElement("img");

// img.src = "image.png";
// var src = document.getElementById("x");

// src.appendChild(img);

// let email = customer.email;

// function addressFormat() {
//     let address = 'location' { street }
// }

// customers { customer { location } }

// function createMenuListItem(menuItem) {
//     const listItem = document.createElement("li");
//     // create an image element
//     const figure = document.createElement("figure");
//     const img = document.createElement("img");
//     img.src = menuItem.img;
//     img.alt = menuItem.description;