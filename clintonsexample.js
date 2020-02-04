example during class

function capitalizeFirstLetter(string) {

    return string[0].toUpperCase() +
        string.slice(1)
}

const customerNames = customers.map(function(customer) {
    return capitalizeFirstLetter(customer.name.first) + ' ' + capitalizeFirstLetter(customer.name.last)

})
}


const customerListItems = customerNames.map(function(name) {
    const li = document.createElement('li')
    li.textContent = namereturn li
})

console.log(customer.Names)