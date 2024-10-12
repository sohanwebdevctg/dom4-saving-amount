// balance
let balance = 0;

// calculateBtn
const calculateBtn = () => {

  // income
  const income = document.getElementById('income');
  const incomeValue = Number(income.value);

  // homeCost
  const homeCost = document.getElementById('homeCost');
  const homeCostValue = Number(homeCost.value);

  // marketCost
  const marketCost = document.getElementById('marketCost');
  const marketCostValue = Number(marketCost.value);

  // otherCost
  const otherCost = document.getElementById('otherCost');
  const otherCostValue = Number(otherCost.value);

  // total cost
  let totalCost = homeCostValue + marketCostValue + otherCostValue;

  // balance
  balance = incomeValue - totalCost;

  if(incomeValue > totalCost){

    // total expense
    let totalExpense = document.getElementById('totalExpense');
    totalExpense.innerText = totalCost;

    // total Balance
    const totalBalance = document.getElementById('totalBalance');
    totalBalance.innerText = balance;

  }else{
    alert('your balance is low')
  }
  
  

  

}



// discountBtn
const discountBtn = () => {

  

  // income
  const income = document.getElementById('income');
  const incomeValue = Number(income.value);



}