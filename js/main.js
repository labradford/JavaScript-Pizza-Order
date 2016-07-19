console.log('the javascript file has loaded');

window.addEventListener('load', hide, false);
//hide elements until called
function hide() {
	var hideBilling = document.getElementById('billing').style.display='none';
	var hideToppings = document.getElementById('toppings').style.display='none';
	var hideOtherAddress = document.getElementById('otheraddresstype').style.display='none';	
}

window.addEventListener('load', start, false);

function start(){
	contact.name.focus();
	var name = document.getElementById('name');
	var otheraddresstype = document.getElementById('otheraddresstype');
	var address = document.getElementById('address');
	var apt = document.getElementById('apt');
	var city = document.getElementById('city');
	var state = document.getElementById('state');
	var zip = document.getElementById('zip');
	var phone = document.getElementById('phone');
	var email = document.getElementById('email');

	var addressType = document.getElementById('addresstype');

	//contact form event listeners
	name.addEventListener('blur', checkName, false);
	addressType.addEventListener('blur', otherAddress, false);
	otheraddresstype.addEventListener('blur', otherAddressType, false);
	address.addEventListener('blur', checkAddress, false);
	apt.addEventListener('blur', checkApt, false);
	city.addEventListener('blur', checkCity, false);
	state.addEventListener('blur', checkState, false);
	zip.addEventListener('blur', checkZip, false);
	phone.addEventListener('blur', checkPhone, false);
	email.addEventListener('blur', checkEmail, false);

	//pizza builder event listeners

	var handTossed = document.getElementById('handTossed');
	var thinCrust = document.getElementById('thinCrust');
	var newYork = document.getElementById('newYork');
	var glutenFree = document.getElementById('glutenFree');
	handTossed.addEventListener('change', doughType, false);
	thinCrust.addEventListener('change', doughType, false);
	newYork.addEventListener('change', doughType, false);
	glutenFree.addEventListener('change', doughType, false);
	handTossed.addEventListener('change', getSizes, false);
	thinCrust.addEventListener('change', getSizes, false);
	newYork.addEventListener('change', getSizes, false);
	glutenFree.addEventListener('change', getSizes, false);
	
	var pizzaSize = document.getElementById('pizzaSize');
	pizzaSize.addEventListener('focus', showToppings, false);

	var pizza = document.getElementById('pizza');
	pizza.addEventListener('focus', crustTotal, false);

	
	var cheese = document.getElementById('cheese');
	cheese.addEventListener('click', cheeseTotal, false);

	var sauce = document.getElementById('sauce');
	sauce.addEventListener('click', sauceTotal, false);

	var toppings = document.getElementById('toppings');
	toppings.addEventListener('click', toppingsTotal, false);

	var isPizzaDone = document.getElementById('pizzadone');
	isPizzaDone.addEventListener('click', pizzaDone, false);

    //billing info event listeners

    var sameAs = document.getElementById('sameAs');
    var bname = document.getElementById('bname');
	var baddress = document.getElementById('baddress');
	var bapt = document.getElementById('bapt');
	var bcity = document.getElementById('bcity');
	var bstate = document.getElementById('bstate');
	var bzip = document.getElementById('bzip');
	var cc = document.getElementById('cc');
	var cvc = document.getElementById('cvc');
	var year = document.getElementById('year');
	sameAs.addEventListener('click', populateBilling, false);
	bname.addEventListener('blur', checkBName, false);
	baddress.addEventListener('blur', checkBAddress, false);
	bapt.addEventListener('blur', checkBApt, false);
	bcity.addEventListener('blur', checkBCity, false);
	bstate.addEventListener('blur', checkBState, false);
	bzip.addEventListener('blur', checkBZip, false);
	cc.addEventListener('blur', checkCC, false);
	cvc.addEventListener('blur', checkCVC, false);
	year.addEventListener('change', checkCCDate, false);

	var billingDone = document.getElementById('billingDone');
	billingDone.addEventListener('click', submitBilling, false);
}   

/*=============== ADDRESS VALIDATION =================*/

function checkName() {
	var userName = this.value;
	var textOnly = /^[\sa-zA-Z]+$/;
	if (userName.length === 0) {
		nameError.innerHTML = '<p class = "text-danger">* This field is required. Please enter your name.</p>';
		contact.name.focus();
	} else if (userName.match(textOnly)) {
		contact.addresstype.focus();
		nameError.innerHTML = '';
	} else {
		nameError.innerHTML = '<p class = "text-danger">* Name invalid. Please use only letters and spaces for your name</p>';
		contact.name.focus();
	}
}

function otherAddress() {
	var addressType = document.getElementById('addresstype');
	if (addressType.value === 'other') {
		var showOtherAddress = document.getElementById('otheraddresstype').style.display='block';
   		contact.otheraddresstype.focus();
   } else {
   	contact.address.focus();
   }
}

function otherAddressType() {
	var userName = this.value;
	var textOnly = /^[\sa-zA-Z]+$/;
	if (userName.length === 0) {
		otherAddressError.innerHTML = '<p class = "text-danger">* This field is required. Please enter your address type.</p>';
		contact.otheraddresstype.focus();
	} else if (userName.match(textOnly)) {
		contact.address.focus();
		otherAddressError.innerHTML = '';
	} else {
		otherAddressError.innerHTML = '<p class = "text-danger">* Other address type invalid. Please use only letters for your name</p>';
		contact.otheraddresstype.focus();
	}	
}

function checkAddress() {
	var addressInput = this.value;
	var textAndNumbers = /^[\sa-zA-Z0-9.]+$/;
	if (addressInput.length === 0) {
		addressError.innerHTML = '<p class="text-danger">* This field is required. Please enter your address</p>';
		contact.address.focus();
	} else if (addressInput.match(textAndNumbers)) {
		addressError.innerHTML = '';
		contact.apt.focus();
	} else {
		addressError.innerHTML = '<p class = "text-danger">* Address is invalid. Please use only letters and numbers</p>';
		contact.address.focus();
	}
}

function checkApt() {
	var aptInput = this.value;
	var textAndNumbers = /^[\sa-zA-Z0-9.]+$/;
	 if (aptInput.match(textAndNumbers) || aptInput.length === 0) {
		aptError.innerHTML = '';
		contact.city.focus();
	} else {
		aptError.innerHTML = '<p class = "text-danger">* Apartment number is invalid. Please use only letters or numbers</p>';
		contact.apt.focus();
	}
}

function checkCity() {
	var cityName = this.value;
	var textOnly = /^[\sa-zA-Z]+$/;
	if (cityName.length === 0) {
		cityError.innerHTML = '<p class = "text-danger"> *This field is required. Please enter your city.</p>';
		contact.city.focus();
	} else if (cityName.match(textOnly)) {
		cityError.innerHTML = '';
		contact.state.focus();
	} else {
		cityError.innerHTML = '<p class = "text-danger"> *Entry invalid. Please use only letters and spaces for your city</p>';
		contact.city.focus();
	}
}

function checkState() {
	var stateValue = this.value;
	var lettersOnly = /[^a-zA-Z]+$/;
	if (stateValue.length !== 2 || stateValue.match(lettersOnly)) {
		stateError.innerHTML = '<p class = "text-danger">* Entry invalid. Please enter your two letter state abbreviation</p>';
		contact.state.focus();
	} else {
		stateError.innerHTML = '';
		contact.zip.focus();
	}
}

function checkZip() {
	var zipValue = this.value;
	var numbersOnly = /[^0-9]+$/;
	if (zipValue.length !== 5 || zipValue.match(numbersOnly)) {
		zipError.innerHTML = '<p class = "text-danger">* Entry invalid. Please enter your five digit zip code</p>';
		contact.zip.focus();
	} else {
		zipError.innerHTML = '';
		contact.phone.focus();
	}
}

function checkPhone() {
	var phoneValue = this.value;
	var numbersOnly = /[^0-9]+$/;
	if (phoneValue.length !==10 || phoneValue.match(numbersOnly)) {
		phoneError.innerHTML = '<p class = "text-danger">* Entry Invalid. Please enter ten numbers only</p>';
		contact.phone.focus();
	} else {
		phoneError.innerHTML = '';
		contact.email.focus();
	}
}

function checkEmail() {
	var emailValue = this.value;
	var emailMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  	
	if (emailValue.length === 0) {
		emailError.innerHTML = '<p class = "text-danger">* This field is required. Please enter your email.</p>';
		contact.email.focus();
	}	else if (emailValue.match(emailMatch)) {
		emailError.innerHTML = '';
		pizza.handTossed.focus();
	} else {
		emailError.innerHTML = '<p class = "text-danger">* Entry Invalid. Please enter a valid email address</p>';
		contact.email.focus();
	}
}

/*===================PIZZA ORDER FUNCTIONS===============*/

/* PIZZA TYPE OBJECT */
var crustOptions = [
	{type: 'handTossed',
	size: 'Small',
	price: '9.99'},
	{type: 'handTossed',
	size: 'Medium',
	price: '12.99'},
	{type: 'handTossed',
	size: 'Large',
	price: '14.99'},
	{type: 'thinCrust',
	size: 'Medium',
	price: '11.99'},
	{type: 'thinCrust',
	size: 'Large',
	price: '13.99'},
	{type: 'newYork',
	size: 'Large',
	price: '16.99'},
	{type: 'newYork',
	size: 'Extra Large',
	price: '19.99'},
	{type: 'glutenFree',
	size: 'Small',
	price: '10.99'}
];
//NEED TO WORK ON LOGIC FOR PIZZA ORDER
//NEED TO RESET DOUGH VALUE IF NEW RADIO IS SELECTED
function doughType(dough) {
	var doughs = document.getElementsByName('dough');
	var doughValue = '';
		for (var i=0; i<doughs.length; i++) {
			var someDough = doughs[i];
				if (someDough.checked) {
					doughValue = someDough.value;
					break;
				}
			else doughValue = 'noRadioChecked';
            }
			if (doughValue === 'noRadioChecked') {
			alert('Please select a dough type');
			} 
		return doughValue;
}

function getSizes(doughValue) {
	var pizzaSize = document.getElementById('pizzaSize');
	var crustType = doughType();
	
	for (var i = 0; i < crustOptions.length; i++) {
		if (crustOptions[i].type === crustType) {
			var option = document.createElement('option');
			var att = document.createAttribute('value');
			att.value = crustOptions[i].price;
			option.setAttributeNode(att);
			var textNode = crustOptions[i].size + ' $' + crustOptions[i].price;
			var Node = document.createTextNode(textNode);
			option.appendChild(Node);
			pizzaSize.appendChild(option);
		}	
	}
}
 
function showToppings() {
	var showToppings = document.getElementById('toppings').style.display='block';
}

function crustTotal() {
	var displayTotal = document.getElementById('total');
	var priceTotal = 0;
	displayTotal.innerHTML = '<p>Order Total: $' + priceTotal + '</p>';
	priceTotal = parseFloat(pizzaSize.value);
	displayTotal.innerHTML = '<p>Order Total: $' + priceTotal + '</p>';
	return priceTotal;
}

function cheeseTotal() {
	var displayTotal = document.getElementById('total');
	var cheese = document.getElementById('cheese');
	var cheesePrice;
		if (cheese.value === 'light' || cheese.value === 'normal') {
			cheesePrice = 0;
		} else if (cheese.value === 'extra') {
			cheesePrice = 2.99;
		} else if (cheese.value === 'double') {
			cheesePrice = 3.99;
		}
	var cheesePriceTotal = crustTotal() + cheesePrice;
	displayTotal.innerHTML = '<p>Order Total: $' + cheesePriceTotal + '</p>';
	return cheesePriceTotal;
	pizza.sauce.focus();
}

	function sauceTotal() {
	console.log('the function sauceTotal has been called');
	var displayTotal = document.getElementById('total');
	var sauce = document.getElementById('sauce');
	var saucePrice;
		if (sauce.value === 'regular') {
			saucePrice = 0;
		} else if (sauce.value === 'hearty') {
			saucePrice = .99;
		} else if (sauce.value === 'bbq') {
			saucePrice = 1.99;
		}
	var saucePriceTotal = cheeseTotal() + saucePrice;
	console.log(saucePriceTotal);
	displayTotal.innerHTML = '<p>Order Total: $' + saucePriceTotal + '</p>';
	return saucePriceTotal;
	pizza.pepperoni.focus();
}

// Calculate the total for items in the form which are selected.
	function toppingsTotal() {
	console.log('the toppingsTotal function has been called');
	var displayTotal = document.getElementById('total');
	var toppings = document.getElementById('toppings');
	var toppingsPrice = 0;
      		if (toppings.checked === false) {   // Item was uncheck. Subtract item value from total.
			toppingsPrice -= - .99;
			console.log('a checkbox has been deselected -.99 to the total price');
			} else {   // Item was checked. Add the item value to the total.
          	toppingsPrice += .99;
          	console.log('a checkbox has been checked +.99 to the total price')
		}
    
	var toppingsPriceTotal = sauceTotal() + toppingsPrice;
	displayTotal.innerHTML = '<p>Order Total: $' + toppingsPriceTotal + '</p>';
    console.log(toppingsPriceTotal);
    return toppingsPriceTotal;
  
}

function pizzaDone() {
	console.log('the pizzaDone function has been called');
	var done = confirm('Are you sure you are done building your pizza?');
	if (done === true) {
		var showBilling = document.getElementById('billing').style.display='block';
		billing.sameAs.focus();
		//need to disable pizza and address form
		} else {
		pizza.pepperoni.focus();
	}
}

//==============BILLING FORM VERIFICATION================

function populateBilling() {
	console.log('populateBilling has been called');
	var sameAs = document.getElementById('sameAs');
	if (sameAs.checked) {
		console.log('same as box has been checked');
		billing.bname.value = contact.name.value;
		billing.baddress.value = contact.address.value;
		billing.bapt.value = contact.apt.value;
		billing.bcity.value = contact.city.value;
		billing.bstate.value = contact.state.value;
		billing.bzip.value = contact.zip.value;
	} else {
		billing.bname.focus();
	}
}

function checkBName() {
	var userName = this.value;
	var textOnly = /^[\sa-zA-Z]+$/;
	if (userName.length === 0) {
		bnameError.innerHTML = '<p class = "text-danger">* This field is required. Please enter your name.</p>';
		billing.bname.focus();
	} else if (userName.match(textOnly)) {
		bnameError.innerHTML = '';
		billing.baddress.focus();
	} else {
		bnameError.innerHTML = '<p class = "text-danger">* Name invalid. Please use only letters and spaces for your name</p>';
		billing.bname.focus();
	}
	console.log(userName);
}

function checkBAddress() {
	var addressInput = this.value;
	var textAndNumbers = /^[\sa-zA-Z0-9.]+$/;
	if (addressInput.length === 0) {
		baddressError.innerHTML = '<p class = "text-danger">* This field is required. Please enter your city.</p>';
		billing.baddress.focus();
	} else if (addressInput.match(textAndNumbers)) {
		baddressError.innerHTML = '';
		billing.bapt.focus();
	} else {
		baddressError.innerHTML = '<p class = "text-danger">* Address is invalid. Please use only letters and numbers</p>';
		billing.baddress.focus();
	}
	console.log(addressInput);
}

function checkBApt() {
	var aptInput = this.value;
	var textAndNumbers = /^[\sa-zA-Z0-9.]+$/;
	 if (aptInput.match(textAndNumbers) || aptInput.length === 0) {
		baptError.innerHTML = '';
		billing.bcity.focus();
	} else {
		baptError.innerHTML = '<p class = "text-danger">* Apartment number is invalid. Please use only letters or numbers</p>';
		billing.bapt.focus();
	}
	console.log(aptInput);
}

function checkBCity() {
	var cityName = this.value;
	var textOnly = /^[\sa-zA-Z]+$/;
	if (cityName.length === 0) {
		bcityError.innerHTML = '<p class = "text-danger">* This field is required. Please enter your city.</p>';
		billing.bcity.focus();
	} else if (cityName.match(textOnly)) {
		bcityError.innerHTML = '';
		console.log('true, city is characters and whitespace');
		billing.bstate.focus();
	} else {
		bcityError.innerHTML = '<p class = "text-danger">* Entry invalid. Please use only letters and spaces for your city</p>';
		billing.bcity.focus();
	}
	console.log(cityName);
}

function checkBState() {
	var stateValue = this.value;
	var lettersOnly = /[^a-zA-Z]+$/;
	if (stateValue.length !== 2 || stateValue.match(lettersOnly)) {
		bstateError.innerHTML = '<p class = "text-danger">* Entry invalid. Please enter your two letter state abbreviation</p>';
		billing.bstate.focus();
	} else {
	bstateError.innerHTML = '';
	billing.bzip.focus();
	}
	console.log(stateValue);
}

function checkBZip() {
	var zipValue = this.value;
	var numbersOnly = /[^0-9]+$/;
	if (zipValue.length !== 5 || zipValue.match(numbersOnly)) {
		bzipError.innerHTML = '<p class = "text-danger">* Entry invalid. Please enter your five digit zip code</p>';
		billing.bzip.focus();
	} else {
		bzipError.innerHTML = '';
		billing.cc.focus();
	}
	console.log(zipValue);
}

//SIMPLE VERIFY. NEED TO REFINE AND INTEGRATE LUHN FORMULA
function checkCC() {
	var ccValue = this.value;
	var numbersOnly = /[^0-9]+$/;
	var cardType;

	if (ccValue.match(numbersOnly)) {
		ccError.innerHTML = '<p class = "text-danger">* Entry invalid. Credit Card should contain numbers only</p>';
		billing.cc.focus();
	} else if (ccValue.length < 13 || ccValue.length > 16 || ccValue.length == 14) {
		ccError.innerHTML = '<p class = "text-danger">* Entry invalid. Please enter a valid Credit Card number</p>';
		billing.cc.focus();
	} else {
		ccError.innerHTML = '';
		billing.cvc.focus();
	}
}

function checkCVC() {
	var cvcValue = this.value;
	var numbersOnly = /[^0-9]+$/;
	if (cvcValue.length < 3 || cvcValue.length > 4 || cvcValue.match(numbersOnly)) {
		cvcError.innerHTML = '<p class = "text-danger">* Entry invalid. Please enter a valid cvc code</p>';
		billing.cvc.focus();
	} else {
		cvcError.innerHTML = '';
		billing.month.focus();
	}
}

function checkCCDate() {
	var month = document.getElementById('month');
	var year = document.getElementById('year');
	var date = month.value + year.value;
	console.log(date);
	var d = new Date();
	var cMonth = d.getMonth();
	var cYear = d.getFullYear();
	console.log(cMonth);
	console.log(cYear);

	if (cYear.toString() === year.value && cMonth > month.value) {
		//need to make sure month-1 is > current month too
		dateError.innerHTML = '<p class = "text-danger">* Error. Expiration date should be past the current date</p>';
		billing.year.focus();
	} else {
		billing.billingDone.focus();
		dateError.innerHTML = '';
	}
}

function submitBilling() {
	alert('Your order has been submitted. Thank you for ordering with Perfect Pizza');
}





