for (let customer of customers) {
    container_block = document.querySelector("#flex-box");

    const picture = document.createElement("img");
    const pictureDiv = container_block.appendChild(picture);
    pictureDiv.classList.add("photos");

    picture.src = customer.picture.large;

    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    let wholeName =
        capitalizeFirstLetter(customer.name.first) +
        " " +
        capitalizeFirstLetter(customer.name.last);

    let capitalizedStreet = capitalizeFirstLetter(customer.location.street);
    let capitalizedCity = capitalizeFirstLetter(customer.location.city);

    const name = document.createElement("div");
    const nameDiv = container_block.appendChild(name);
    nameDiv.classList.add("name");

    const email = document.createElement("div");
    emailDiv = container_block.appendChild(email);
    emailDiv.classList.add("email");

    const addressOne = document.createElement("div");
    addressOneDiv = container_block.appendChild(addressOne);
    addressOneDiv.classList.add("profiles");

    const addressTwo = document.createElement("div");
    addressTwoDiv = container_block.appendChild(addressTwo);
    addressTwoDiv.classList.add("profiles");

    const dateOfBirth = document.createElement("div");
    dateOfBirthDiv = container_block.appendChild(dateOfBirth);
    dateOfBirthDiv.classList.add("profiles");

    customerSince = document.createElement("div");
    customerSinceDiv = container_block.appendChild(customerSince);
    customerSinceDiv.classList.add("profiles");

    name.innerHTML = wholeName;
    email.innerHTML = customer.email;
    addressOne.innerHTML = capitalizedStreet;
    addressTwo.innerHTML = capitalizedCity + " " + customer.location.postcode;
    dateOfBirth.innerHTML = customer.dob;
    customerSince.innerHTML = customer.registered;
}