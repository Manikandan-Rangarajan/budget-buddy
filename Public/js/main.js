console.log("fuck you");
// import mongoose from "mongoose";

const btn = document.getElementById("btn");
let  PIncome,SIncome,PExpenses,OExpenses,TotIncome,TotExpenses,Gtotal;
let  pIncomeValue,sIncomeValue,pExpensesValue,oExpensesValue;

btn.addEventListener('click', () => {
    console.log("hell world");
   PIncome = document.getElementById("PIncome");
   SIncome = document.getElementById("SIncome");
   PExpenses = document.getElementById("PExpenses");
   OExpenses = document.getElementById("OExpenses");

   pIncomeValue = Number(PIncome.value);
   sIncomeValue = Number(SIncome.value);
   pExpensesValue = Number(PExpenses.value);
   oExpensesValue = Number(OExpenses.value);

   TotIncome = pIncomeValue + sIncomeValue;
   TotExpenses = pExpensesValue + oExpensesValue;

   Gtotal = TotIncome - TotExpenses;
   document.querySelector(".total").innerHTML = "Total Amount left : " + Gtotal;
});

let btn2 = document.getElementById("icon");

btn2.addEventListener('click',()=>{
    toggleNavbar();
})

function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }


export default Gtotal;