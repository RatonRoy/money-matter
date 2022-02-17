function getInputValue(inputId) {
	const inputField = document.getElementById(inputId);
	const inputText = inputField.value;
	const inputAmount = parseFloat(inputText);
	// inputField.value = ' ';
	return inputAmount;
}
function updateAmount(elementId, amount) {
	const updateElement = document.getElementById(elementId); 
	updateElement.innerText = amount;
}
document.getElementById('calculation').addEventListener('click', function () {
	const incomeAmount = getInputValue('income');
	const foodAmount = getInputValue('food');
	const rentAmount = getInputValue('rent');
	const clothesAmount = getInputValue('clothes');
	const totallExpenses = foodAmount + rentAmount + clothesAmount;
	const balanceAfterExpenses = incomeAmount - totallExpenses;
	updateAmount('totall-expenses', totallExpenses);
	updateAmount('balance', balanceAfterExpenses);
})
document.getElementById('saving').addEventListener('click', function () {
	const remainingBalanceElement = document.getElementById('balance');
	const remainingBalaceText = remainingBalanceElement.innerText;
	const remainingBalaceAmount = parseFloat(remainingBalaceText);
	const incomeAmount = getInputValue('income');
	const savingPercent = getInputValue('save');
	const savingAmount = savingPercent * incomeAmount / 100;
	updateAmount('saving-amount', savingAmount);
	const lastBalance = remainingBalaceAmount - savingAmount;
	updateAmount('remaining-balace', lastBalance);
})