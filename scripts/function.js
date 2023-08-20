// function for add new item to cart

function addNewItem(event) {
  // capture the ordered list
  const listItemContainer = document.getElementById("list-item-container");

  // capture item name
  const newItem = event.target.parentNode.childNodes[5].innerText;

  if (newItem === undefined || newItem === "") {
    return;
  } else {
    // add the new item to the cart list
    const li = document.createElement("li");
    li.innerText = newItem;
    listItemContainer.appendChild(li);

    // capture each item price
    const newItemPrice = event.target.parentNode.childNodes[7].innerText.split(" ")[0];

    // capture previous total price
    const previousTotalPrice = document.getElementById("total-price").innerText.split(" ")[0];

    // calculate the new price
    const newTotalPrice = parseFloat(previousTotalPrice) + parseFloat(newItemPrice);
    const newTotal = parseFloat(newTotalPrice);
    // show the new price
    document.getElementById("total-price").innerText = parseFloat(newTotalPrice).toFixed(2) + " " + "TK";
    document.getElementById("total").innerText = parseFloat(newTotal).toFixed(2) + " " + "TK";

    // make purchase button active
    const makePurchaseButton = document.getElementById("confirm-purchase");

    if (newTotalPrice > 0) {
      makePurchaseButton.removeAttribute("disabled");
    } else {
      makePurchaseButton.setAttribute("disabled");
    }

    // make coupon apply active
    const applyCouponButton = document.getElementById("apply-coupon");

    if (newTotalPrice >= 200) {
      applyCouponButton.removeAttribute("disabled");
    } else {
      applyCouponButton.setAttribute("disabled");
    }
  }
}

let usedCoupon = false;

function applyCoupon() {
  // capture coupon input field value
  const couponInputField = document.getElementById("coupon-input-field");
  const couponInputValue = couponInputField.value;

  if (couponInputValue === "SELL200") {
    if (usedCoupon) {
      alert("You already entered a coupon");
    } else {
      usedCoupon = true;

      // capture previous price
      const previousTotalPrice = document.getElementById("total-price").innerText.split(" ")[0];

      // apply discount
      const discountAmount = parseFloat(previousTotalPrice) * 0.2;
      document.getElementById("discount").innerText = parseFloat(discountAmount).toFixed(2) + " " + "TK";

      // show updated price
      const total = document.getElementById("total").innerText.split(" ")[0];
      const discountedTotal = parseFloat(total) - parseFloat(discountAmount);
      document.getElementById("total").innerText = parseFloat(discountedTotal).toFixed(2) + " " + "TK";

      couponInputField.value = "";
    }
  } else {
    alert("Invalid Coupon");
  }
}