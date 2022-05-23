let emptyOrderGif = document.getElementById("empty-order-gif");


const executeOrder = () => {

    // If execute order is called the gif should not be visible.

    emptyOrderGif.style.display = 'none';

    let orderIdInput = document.getElementById('order-id-input').value

    // For entering the valid id and having atleast one alphabet or number in it.

    if (!orderIdInput.length) {
        alert("Please Enter a valid order ID")
        return; // By using return if we are not entering the id it will stop the function call here only.
    }

    // Function call for making order template 

    createNewOrderColumn(orderIdInput);

    document.getElementById(orderIdInput).innerText = "Order Placed..."

    // For order Status calls

    chefReceived(orderIdInput)
        .then(pizzaSauceAdded)
        .then(firstLayerOfCheezeAdded)
        .then(toppingsAdded)
        .then(secondLayerOfCheezeAdded)
        .then(pizzaBaked)
        .then(oreganoAdded)
        .then(packageReceivedAtCounter)
        .then(() => document.getElementById(orderIdInput).innerText = 'Order Ready!')
        .catch((err) => console.log(err))
}