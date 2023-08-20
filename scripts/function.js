// function for add new item to cart

function addNewItem(event) {

    const listItemContainer = document.getElementById("list-item-container");

    const newItem = event.target.parentNode.childNodes[5].innerText;
    // const star = event.target.parentNode.childNodes[3];
    if (newItem === undefined || newItem === "") {
      return;
    }
    else {
      const li = document.createElement("li");
      li.innerText = newItem;
      listItemContainer.appendChild(li);

      const newItemPrice = event.target.parentNode.childNodes[7].innerText.split(" ")[0];
      
      const previousTotalPrice = document.getElementById("total-price").innerText.split(" ")[0];
      
    //   const total = document.getElementById("total").innerText.split(" ")[0];
      
      const newTotalPrice = parseFloat(previousTotalPrice) + parseFloat(newItemPrice);
      const newTotal = parseFloat(newTotalPrice);
      document.getElementById("total-price").innerText = parseFloat(newTotalPrice).toFixed(2) + " " + "TK";
      document.getElementById("total").innerText = parseFloat(newTotal).toFixed(2) + " " + "TK";
    }
};