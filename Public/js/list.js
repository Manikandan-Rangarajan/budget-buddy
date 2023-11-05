// JavaScript code to handle the form submission and display the data
// import Gtotal from "./main";

let bal;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("expense-form");
  const listItemInput = document.getElementById("listItem");
  const amountInput = document.getElementById("amount");
  const expensesList = document.getElementById("expenses");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const item = listItemInput.value;
    const amount = amountInput.value;

    if (item && amount) {
      const listItem = document.createElement("li");
      listItem.textContent = `${item}: Rs${amount} `;
      expensesList.appendChild(listItem);

      bal = Gtotal - amount;
      if (bal > 0) {
        const listItem2 = document.createElement("h3");
        listItem2.textContent = `Balance${bal}`;
      }
      else{
        const listItem2 = document.createElement("h3");
        listItem2.textContent = `You have spent more than you had, your balance is less than zero :(`;
      }

      listItemInput.value = "";
      amountInput.value = "";
    } else {
      alert("Please enter both item and amount.");
    }
  });
});
