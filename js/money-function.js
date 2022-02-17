// this function get the input value then transfor it into number 
function getInputValue(inputId) {
	const inputField = document.getElementById(inputId);
	const inputText = inputField.value;
	const inputAmount = parseFloat(inputText);
	return inputAmount;
}
// this function get the html elements then set a amount to the element 
function updateAmount(elementId, amount) {
	const updateElement = document.getElementById(elementId); 
	updateElement.innerText = amount;
}
// get only input value 
function inputValue(idName) {
	const inputElement = document.getElementById(idName);
	const inputElementValue = inputElement.value;
	return inputElementValue;
}
// this  function give some style 
function errorMessage(notificationId) {
	notificationElement = document.getElementById(notificationId);
	notificationElement.style.display = 'block';
}
// the calculation button 
document.getElementById('calculation').addEventListener('click', function () {
	// just collect the input value 
	const incomeElementValue = inputValue('income');
	const foodElementValue = inputValue('food');
	const rentElementValue = inputValue('rent');
	const clothesElementValue = inputValue('clothes'); 
	// this is the error message code if the users input characters are letter 
	if (incomeElementValue.match(/[a-z]/i) || foodElementValue.match(/[a-z]/i) || rentElementValue.match(/[a-z]/i) || clothesElementValue.match(/[a-z]/i)) {
		errorMessage('noti-text');
		return 0;
	}
	// get the  input elements value
	const incomeAmount = getInputValue('income');
	const foodAmount = getInputValue('food');
	const rentAmount = getInputValue('rent');
	const clothesAmount = getInputValue('clothes'); 
	// this is the error message code if the users input value becomes less the 0 
	if (incomeAmount < 0 || foodAmount < 0 || rentAmount < 0 || clothesAmount < 0) {
		errorMessage('noti-number');
		return 0;
	}
	const totallExpenses = foodAmount + rentAmount + clothesAmount;
	// this is the error message code if expenses become bigger than income 
	if (totallExpenses > incomeAmount) {
		errorMessage('claculation-noti');
		document.getElementById('totall-expenses').innerText = '000';
		document.getElementById('balance').innerText = '000';
		return 0;
	}
	const balanceAfterExpenses = incomeAmount - totallExpenses;
	updateAmount('totall-expenses', totallExpenses);
	updateAmount('balance', balanceAfterExpenses);
})
// the saving button 
document.getElementById('saving').addEventListener('click', function () {
	const remainingBalanceElement = document.getElementById('balance');
	const remainingBalaceText = remainingBalanceElement.innerText;
	const remainingBalaceAmount = parseFloat(remainingBalaceText);
	// get only saving input value 
	const savingElementValue = inputValue('save');
	// this is the error message code if the users input characters are letter 
	if (savingElementValue.match(/[a-z]/i)) {
		errorMessage('noti-text');
		return 0;
	}
	const incomeAmount = getInputValue('income');
	const savingPercent = getInputValue('save');
	// this is the error message code if the users input value becomes less the 0 
	if (savingPercent < 0) {
		errorMessage('noti-number');
		document.getElementById('saving-amount').innerText = '000';
		document.getElementById('remaining-balace').innerText = '000';
		return 0;
	}
	const savingAmount = savingPercent * incomeAmount / 100;
	// this is the error message code if saving become bigger than existing balance
	if (savingAmount > remainingBalaceAmount) {
		errorMessage('saving-noti');
		return 0;
	}
	updateAmount('saving-amount', savingAmount);
	const lastBalance = remainingBalaceAmount - savingAmount;
	updateAmount('remaining-balace', lastBalance);
})