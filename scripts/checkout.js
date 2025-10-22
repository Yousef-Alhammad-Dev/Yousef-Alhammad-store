import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { cart } from "../data/cart.js";

function updateCheckoutTitle() {
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const titleElement = document.querySelector(
    ".checkout-header-middle-section a"
  );
  if (titleElement) {
    titleElement.textContent = `${cartQuantity} item${
      cartQuantity !== 1 ? "s" : ""
    }`;
  }
}

renderOrderSummary();
renderPaymentSummary();

setTimeout(updateCheckoutTitle, 100);
