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

  if((incomeValue !== "") && (totalCost !== 0)){

    if(incomeValue > totalCost){
      // total expense
    let totalExpense = document.getElementById('totalExpense');
    totalExpense.innerText = totalCost;

    // total Balance
    const totalBalance = document.getElementById('totalBalance');
    totalBalance.innerText = balance;

    income.value = "";
    homeCost.value = "";
    marketCost.value = "";
    otherCost.value = "";

    }else{
      alert('your amount is low')
    }

    

  }else{
    alert('please put your cost amount')
  }

}



// discountBtn
const discountBtn = () => {

  const bonus = document.getElementById('bonus');
  const bonusValue = Number(bonus.value);
  let newBonus = bonusValue + balance;

  // income
  const income = document.getElementById('income');
  const incomeValue = Number(income.value);

  // discount
  const discount = document.getElementById('discount');
  const discountValue = Number(discount.value);

  // discount percent
  let discountPercent = (incomeValue * discountValue) / 100;
  
  let totalBalance = newBonus - discountPercent;

  if(totalBalance > discountPercent){

    // savingAmount
    let savingAmount = document.getElementById('savingAmount');
    savingAmount.innerText = discountPercent;

    // remainingBalance
    let remainingBalance = document.getElementById('remainingBalance');
    remainingBalance.innerText = totalBalance;

  }else{
    alert('sorry')
  }



}