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

const buyButton0 = document.querySelector('.buyButton0')
const buyButton1 = document.querySelector('.buyButton1')
const buyButton2 = document.querySelector('.buyButton2')

const revealButton = document.getElementById('revealCheckout');
const hiddenDiv = document.getElementById('hiddenCheckOut');
const checkoutDiv = document.querySelector('.checkOut');

const h3Elements0 = document.getElementById('greenGO');
const h3Elements1 = document.getElementById('redStop');
const h3Elements2 = document.getElementById('orangeWow');

const inputPayment = document.querySelector(".payAmount");
const enteredAmount = document.querySelector(".payRecord");
const payButton = document.querySelector(".payButton");
const buyButton = document.querySelector(".buyButton")

const totalValue = document.getElementById('totalValue');



/* Increment Buttons 
--------------------------------------------------------------------------------------------------------------------*/
incrementButton0.addEventListener('click', function(){
    totalCost+= 31.99;
    smallCounter++;
    document.getElementById('smallInput').value = smallCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2);
    document.getElementById('totalValue').value = "R " + totalCost.toFixed(2)
});

incrementButton1.addEventListener('click', function(){
    meduimCounter++;
    totalCost+= 58.99;
    document.getElementById('mediumInput').value = meduimCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2);
    document.getElementById('totalValue').value = "R " + totalCost.toFixed(2)
});

incrementButton2.addEventListener('click', function(){
    largeCounter++;
    totalCost += 87.99;
    document.getElementById('largeInput').value = largeCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2);
    document.getElementById('totalValue').value = "R " + totalCost.toFixed(2)
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
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2);
    document.getElementById('totalValue').value = "R " + totalCost.toFixed(2)
    showCheckoutButton();
});

decrementButton1.addEventListener('click', function(){
    if (meduimCounter > 0){
    meduimCounter--;
    totalCost -= 58.99;
    if (totalCost < 0.01) {
        totalCost = 0; // Ensure totalCost does not go below zero
    }};
    document.getElementById('mediumInput').value = meduimCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2);
    document.getElementById('totalValue').value = "R " + totalCost.toFixed(2)
});

decrementButton2.addEventListener('click', function(){
    if (largeCounter > 0){
    largeCounter--;
    totalCost -= 87.99;
    if (totalCost < 0.01) {
        totalCost = 0; // Ensure totalCost does not go below zero
    }};
    document.getElementById('largeInput').value = largeCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2);
    document.getElementById('totalValue').value = "R " + totalCost.toFixed(2)
});


/* Hidden Checkout 
--------------------------------------------------------------------------------------------------------------------*/
revealButton.addEventListener('click', function(){
    hiddenDiv.style.display = 'block';
    revealButton.style.display = 'none'
});

/* Payment INPUT 
--------------------------------------------------------------------------------------------------------------------*/

payButton.addEventListener('click', function(){
    enteredAmount.innerText = "R " + inputPayment.value;
    if (enteredAmount.innerText === document.getElementById('totalInput').value){
        h3Elements0.style.display = 'block';
        h3Elements1.style.display = 'none';
        h3Elements2.style.display = 'none';
    } else if (enteredAmount.innerText < document.getElementById('totalInput').value){
        h3Elements0.style.display = 'none';
        h3Elements1.style.display = 'block';
        h3Elements2.style.display = 'none';
    } else if (enteredAmount.innerText > document.getElementById('totalInput').value){
        h3Elements0.style.display = 'none';
        h3Elements1.style.display = 'none';
        h3Elements2.style.display = 'block';
    } 
    }); 

    buyButton0.addEventListener('click', function(){
          
          totalCost+= 31.99;
          smallCounter++;
          document.getElementById('smallInput').value = smallCounter;
          document.getElementById('totalInput').value = "R " + totalCost.toFixed(2);
          document.getElementById('totalValue').value = "R " + totalCost.toFixed(2);
      }
    );


      buyButton1.addEventListener('click', function(){
        meduimCounter++;
        totalCost+= 58.99;
        document.getElementById('mediumInput').value = meduimCounter;
        document.getElementById('totalInput').value = "R " + totalCost.toFixed(2);
        document.getElementById('totalValue').value = "R " + totalCost.toFixed(2);
      });

      buyButton2.addEventListener('click', function(){
        largeCounter++;
    totalCost += 87.99;
    document.getElementById('largeInput').value = largeCounter;
    document.getElementById('totalInput').value = "R " + totalCost.toFixed(2);
    document.getElementById('totalValue').value = "R " + totalCost.toFixed(2);

        });

        
      
       
          
          function displayCheckOut() {
            const checkoutDiv = document.getElementById('checkIT');
          
            if (totalValue.value === "") {
              checkoutDiv.style.display = 'none';
            } else {
              checkoutDiv.style.display = 'block';
            }
          };

 totalValue.addEventListener('change', function() {
            displayCheckOut();
          });



/*

          