let parentDiv = document.getElementById("parent-div");

const createNewOrderColumn = (orderIdInput) => {

    // Element creation by using javascript

    let colDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let cardHeaderDiv = document.createElement("div");
    let cardBodyDiv = document.createElement("div");
    let cardTitleH5 = document.createElement("h5")
    let cardTextP = document.createElement("p")
    let cardOrderStatusSpan = document.createElement("span");
    let cardButtonA = document.createElement("a")
    let cardFooterDiv = document.createElement("div")

    // Element text creation by using js

    let cardHeaderDivText = document.createTextNode("Order ID: " + orderIdInput);
    let cardTitleH5Text = document.createTextNode("Bill Amount : $152 ")
    let cardTextPText = document.createTextNode("Large Size pizza")
    let cardButtonAText = document.createTextNode("Cancel Order")
    let cardOrderStatusText = document.createTextNode('Pizza Baked')

    // Making relation with elements created above

    parentDiv.appendChild(colDiv);
    colDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);
    cardDiv.appendChild(cardFooterDiv);
    cardBodyDiv.appendChild(cardTitleH5);
    cardBodyDiv.appendChild(cardTextP);
    cardOrderStatusSpan.appendChild(cardOrderStatusText);
    cardBodyDiv.appendChild(cardOrderStatusSpan);
    cardFooterDiv.appendChild(cardButtonA);

    cardTitleH5.appendChild(cardTitleH5Text);
    cardTextP.appendChild(cardTextPText);
    cardButtonA.appendChild(cardButtonAText);
    cardHeaderDiv.appendChild(cardHeaderDivText);
    cardOrderStatusSpan.appendChild(cardOrderStatusText);

    // Adding class to the Element by using js

    colDiv.classList = 'col-md-4 col-xs-12 order-block';
    cardDiv.classList = 'card text-center'
    cardHeaderDiv.classList = 'card-header'
    cardBodyDiv.classList = 'card-body'
    cardFooterDiv.classList = 'card-footer text-muted'
    cardTitleH5.classList = 'card-title'
    cardTextP.classlist = 'card-text'
    cardButtonA.classList = 'btn btn-danger cancel-button'
    cardOrderStatusSpan.classList = 'badge rounded-pill bg-success order-status'

    // Adding Id to the particular span so that we can seperately identify for specific order (Very imp).

    cardOrderStatusSpan.id = orderIdInput

    // For canceling the order.

    cardButtonA.addEventListener('click', () => {

        // 1. Removing the child from parentDiv(It will have a error on console but it will work).

        // parentDiv.removeChild(colDiv);

        // 2. Just doing its whole style none(Best way)

        colDiv.style.display = 'none';
    })
}