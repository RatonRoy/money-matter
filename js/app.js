/* // here every thing is code hard not decelered function 
document.getElementById('calculation').addEventListener('click', function () {
	const incomeField = document.getElementById('income');
	const foodField = document.getElementById('food');
	const rentField = document.getElementById('rent');
	const colthesField = document.getElementById('colthes');
	// values 
	const incomeFieldValue = incomeField.value;
	const foodFieldValue = foodField.value;
	const rentFieldValue = rentField.value;
	const colthesFieldValue = colthesField.value;
	// totall expenses
	const totallExpenses = parseFloat(foodFieldValue) + parseFloat(rentFieldValue) + parseFloat(colthesFieldValue);
	console.log(totallExpenses);
	const balanceAfterExpenses = parseFloat(incomeFieldValue) - totallExpenses;
	console.log(balanceAfterExpenses);
	// select the expense elements 
	const expensesElement = document.getElementById('totall-expenses'); 
	expensesElement.innerText = totallExpenses;
	const balanceElement = document.getElementById('balance');
	balanceElement.innerText = balanceAfterExpenses;
})
document.getElementById('saving').addEventListener('click', function () {
	const balanceElement = document.getElementById('balance');
	const remainingBalace = balanceElement.innerText;
	const savingElement = document.getElementById('save');
	const savingElementValue = savingElement.value;
	const savingAmount = (parseFloat(savingElementValue) * parseFloat(remainingBalace)) / 100;
	const savingText = document.getElementById('saving-amount');
	savingText.innerText = savingAmount;
	const remainingBalaceElement = document.getElementById('remaining-balace'); 
	remainingBalaceElement.innerText = parseFloat(remainingBalace) - savingAmount;
}) */