// Add new item to cart using complex way

/*
document.getElementById("utensil-holder").addEventListener("click", function (event) {
    // console.log('utensil is clicked');

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
  });

*/

// Add event listener to all the 9 item div using unique id

document.getElementById('utensil-holder').addEventListener('click', addNewItem);
document.getElementById('chopping-board').addEventListener('click', addNewItem);
document.getElementById('home-cooker').addEventListener('click', addNewItem);
document.getElementById('sports-black-cap').addEventListener('click', addNewItem);
document.getElementById('full-jersey-set').addEventListener('click', addNewItem);
document.getElementById('sports-cates').addEventListener('click', addNewItem);
document.getElementById('single-relax-chair').addEventListener('click', addNewItem);
document.getElementById('children-play').addEventListener('click', addNewItem);
document.getElementById('flexible-sofa').addEventListener('click', addNewItem);

// Insert coupon

document.getElementById('apply-coupon').addEventListener('click', applyCoupon);