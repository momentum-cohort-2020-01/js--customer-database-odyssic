function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const wholeName = customers.map(function(customer) {
    return (
        capitalizeFirstLetter(customer.name.first) +
        " " +
        capitalizeFirstLetter(customer.name.last)
    );

    console.log("cap name ran");
});

for (let customer of customers) {
    container_block = document.querySelector("#container");

    const name = document.createElement("div");
    container_block.parentElement.appendChild(name);

    const email = document.createElement("div");
    container_block.parentElement.appendChild(email);

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

    // carYearParent.classList.add("input-invalid");

    // parentElement.appendChild(customer.wholeName);
}

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

//     const caption = document.createElement("figcaption");
//     caption.textContent = menuItem.title;

//     figure.appendChild(img);
//     figure.appendChild(caption);
//     listItem.appendChild(figure);

//     return listItem;
// }

// function showMenuItems() {
//     const list = document.querySelector("#menu-items");

//     for (const item of menuItems) {
//         const listItem = createMenuListItem(item);
//         list.appendChild(listItem);
//     }
// }

// showMenuItems();
// ()