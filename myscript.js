for (let customer of customers) {
    // create profile div / append to that
    profileBoxParent = document.querySelector("#container");

    const profileBox = document.createElement("div");
    profileBox.classList.add("flex-box");

    const picture = document.createElement("img");

    profileBoxParent.appendChild(profileBox);

    profileBox.appendChild(picture);

    const pictureDiv = profileBox.appendChild(picture);
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

    // for (let state of usStates) {
    //     let stateUpper = customer.location.state.toUpperCase;
    //     let stateInitals = state.abbreviation;
    // }

    // function nameToAbbr(stateName) {
    //     const idx = usStates.findIndex(function(state) {
    //         return state.name === stateName.toUpperCase();
    //     });

    //     if (idx === -1) {
    //         return null;
    //     }

    //     return usStates[idx].abbreviation;
    // }

    const name = document.createElement("div");
    const nameDiv = profileBox.appendChild(name);
    nameDiv.classList.add("name");

    const email = document.createElement("div");
    emailDiv = profileBox.appendChild(email);
    emailDiv.classList.add("email");

    const addressOne = document.createElement("div");
    addressOneDiv = profileBox.appendChild(addressOne);
    addressOneDiv.classList.add("profiles");

    const addressTwo = document.createElement("div");
    addressTwoDiv = profileBox.appendChild(addressTwo);
    addressTwoDiv.classList.add("profiles");

    const dateOfBirth = document.createElement("div");
    dateOfBirthDiv = profileBox.appendChild(dateOfBirth);
    dateOfBirthDiv.classList.add("profiles");

    customerSince = document.createElement("div");
    customerSinceDiv = profileBox.appendChild(customerSince);
    customerSinceDiv.classList.add("profiles");

    name.innerHTML = wholeName;
    email.innerHTML = customer.email;
    addressOne.innerHTML = capitalizedStreet;
    addressTwo.innerHTML =
        capitalizedCity + " " + " " + customer.location.postcode;
    dateOfBirth.innerHTML = customer.dob;
    customerSince.innerHTML = customer.registered;
}