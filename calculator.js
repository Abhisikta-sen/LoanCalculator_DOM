//listen for submit
document.querySelector("#loan-form").addEventListener("submit", function(e){
    //hide results
        document.querySelector("#results").style.display = "none";

    //show loader
        document.querySelector(".loading").style.display = "block";

    setTimeout(caculateResults, 2000);

    e.preventDefault();
});

function caculateResults(e){
    // // input variables
    // const loan_amount = document.querySelector("#amount").value;
    // const interest_val = document.querySelector("#interest").value; //document.getElementById("interest").value;//both are same   
    // const no_of_yrs = document.querySelector("#years_to_pay").value;
    // console.log(loan_amount+" : "+interest_val+" : "+no_of_yrs);
    // // print variables
    // const monthly_payment = document.querySelector("#monthly_pay").value;
    // const tot_pat = document.querySelector("#total_pay").value;
    // const tot_interest = document.querySelector("#total_interest").value;
    
    //variable declaration not required here,its working by using ids from HTML, not sure how????
    // the calculation
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years_to_pay.value) * 12;
    console.log(principal+" : "+calculatedInterest+" : "+calculatedPayments);

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthly_pay.value = monthly.toFixed(2);
        total_pay.value = (monthly * calculatedPayments).toFixed(2);
        total_interest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        
        //show result
        document.querySelector("#results").style.display = "block";

        //hide loader
        document.querySelector(".loading").style.display = "none";

    } else {
        showError('Please check your numbers');
    }

}

// Show Error
function showError(error){

    //show result
    document.querySelector("#results").style.display = "none";

    //hide loader
    document.querySelector(".loading").style.display = "none";

    // Create a div
    const errorDiv = document.createElement('div');
  
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // Add class
    errorDiv.className = 'alert alert-danger';
  
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
  
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }
  
  // Clear error
  function clearError(){
    document.querySelector('.alert').remove();
  }