const chefReceived = (orderIdInput) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderIdInput).innerText =   'Chef received';
            resolve(orderIdInput)
        }, 2000)
    })
}

const pizzaSauceAdded = (orderIdInput) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderIdInput).innerText =  'Pizza Sauce added';
            resolve(orderIdInput)
        }, 10000)
    })
}

const firstLayerOfCheezeAdded = (orderIdInput) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderIdInput).innerText =  'First layer of cheeze added';
            resolve(orderIdInput)
        }, 5000)
    })
}

const toppingsAdded = (orderIdInput) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderIdInput).innerText =  'Toppings added';
            resolve(orderIdInput)
        }, 12000)
    })
}

const secondLayerOfCheezeAdded = (orderIdInput) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderIdInput).innerText =  'Second layer of cheeze added';
            resolve(orderIdInput)
        }, 5000)
    })
}

const pizzaBaked = (orderIdInput) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderIdInput).innerText =  'Pizza baked!';
            resolve(orderIdInput)
        }, 15000)
    })
}

const oreganoAdded = (orderIdInput) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderIdInput).innerText =  'Oregano added and packed';
            resolve(orderIdInput)
        }, 8000)
    })
}

const packageReceivedAtCounter = (orderIdInput) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderIdInput).innerText =  'Package received at counter';
            resolve(orderIdInput)
        }, 2000)
    })
}