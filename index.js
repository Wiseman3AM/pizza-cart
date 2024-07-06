/*incrementButton0.addEventListener('click', function(){
    smallCounter++;
    document.getElementById('smallInput').value = smallCounter;
});*/

/* Define Variables
--------------------------------------------------------------------------------------------------------------------*/

let smallCounter = 0;
let meduimCounter = 0;
let largeCounter = 0;
let totalCost = 0

const incrementButton0 =  document.querySelector('.increment0');
const decrementButton0 = document.querySelector('.decrement0');

const incrementButton1 =  document.querySelector('.increment1');
const decrementButton1 = document.querySelector('.decrement1');

const incrementButton2 =  document.querySelector('.increment2');
const decrementButton2 = document.querySelector('.decrement2');

const revealButton = document.getElementById('revealCheckout')
const hiddenDiv = document.getElementById('hiddenCheckOut')

/* Increment Buttons 
--------------------------------------------------------------------------------------------------------------------*/
incrementButton0.addEventListener('click', function(){
    totalCost+= 31.99;
    smallCounter++;
    document.getElementById('smallInput').value = smallCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2)
});

incrementButton1.addEventListener('click', function(){
    meduimCounter++;
    totalCost+= 58.99;
    document.getElementById('mediumInput').value = meduimCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2)
});

incrementButton2.addEventListener('click', function(){
    largeCounter++;
    totalCost += 87.99;
    document.getElementById('largeInput').value = largeCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2)
});

/* Decrement Buttons 
--------------------------------------------------------------------------------------------------------------------*/
decrementButton0.addEventListener('click', function(){
    if (smallCounter > 0){
    smallCounter--;
    totalCost -= 31.99;
    if (totalCost < 0.01) {
        totalCost = 0; // Ensure totalCost does not go below zero
    } };
    document.getElementById('smallInput').value = smallCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2)
});

decrementButton1.addEventListener('click', function(){
    if (meduimCounter > 0){
    meduimCounter--;
    totalCost -= 58.99;
    if (totalCost < 0.01) {
        totalCost = 0; // Ensure totalCost does not go below zero
    }};
    document.getElementById('mediumInput').value = meduimCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2)
});

decrementButton2.addEventListener('click', function(){
    if (largeCounter > 0){
    largeCounter--;
    totalCost -= 87.99;
    if (totalCost < 0.01) {
        totalCost = 0; // Ensure totalCost does not go below zero
    }};
    document.getElementById('largeInput').value = largeCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2)
});


/* Hidden Checkout 
--------------------------------------------------------------------------------------------------------------------*/
revealButton.addEventListener('click', function(){
    hiddenDiv.style.display = 'block';
    revealButton.style.display = 'none'
});

/* Payment INPUT 
--------------------------------------------------------------------------------------------------------------------*/
