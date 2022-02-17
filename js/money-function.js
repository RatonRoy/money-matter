function getInputValue(inputId) {
	const inputField = document.getElementById(inputId);
	const inputText = inputField.value;
	/* if (inputText.match(/[a-z]/i)) {
		console.log('is latter');
		// break;
	} */
	const inputAmount = parseFloat(inputText);
	return inputAmount;
}
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
document.getElementById('calculation').addEventListener('click', function () {
	// just collect the input value 
	const incomeElementValue = inputValue('income');
	const foodElementValue = inputValue('food');
	const rentElementValue = inputValue('rent');
	const clothesElementValue = inputValue('clothes'); 
	// this is the error message code if the input value becomes less the 0 
	if (incomeElementValue < 0 || foodElementValue < 0 || rentElementValue < 0 || clothesElementValue < 0) {
		const ontiNumberElemnt = document.getElementById('onti-number');
		ontiNumberElemnt.style.display = 'block';
		return 0;
	}
	// this is the error message code if the input characters are letter 
	if (incomeElementValue.match(/[a-z]/i) || foodElementValue.match(/[a-z]/i) || rentElementValue.match(/[a-z]/i) || clothesElementValue.match(/[a-z]/i)) {
		const ontiTextElement = document.getElementById('noti-text');
		ontiTextElement.style.display = 'block';
		return 0;
	}
	 
	// other content 
	const incomeAmount = getInputValue('income');
	const foodAmount = getInputValue('food');
	const rentAmount = getInputValue('rent');
	const clothesAmount = getInputValue('clothes');
	const totallExpenses = foodAmount + rentAmount + clothesAmount;
	// this is the error message code if expenses become bigger than income 
	if (totallExpenses > incomeAmount) {
		const claculationNoti = document.getElementById('claculation-noti');
		claculationNoti.style.display = 'block';
		return 0;
	}
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
	// this is the error message code if saving become bigger than existing balance
	if (savingAmount > remainingBalaceAmount) {
		const savingNoti = document.getElementById('saving-noti');
		savingNoti.style.display = 'block';
		return 0;
	}
	updateAmount('saving-amount', savingAmount);
	const lastBalance = remainingBalaceAmount - savingAmount;
	updateAmount('remaining-balace', lastBalance);
})