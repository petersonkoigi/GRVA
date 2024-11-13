// script.js
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const phone = document.getElementById('phone').value;

    // Validation
    if (!name || !amount || !phone) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Simulate payment confirmation
    const statusDiv = document.getElementById('payment-status');
    statusDiv.textContent = "Processing your payment... Please wait.";
    statusDiv.style.color = 'orange';

    // Simulate a delay to mimic processing time
    setTimeout(function() {
        // Assuming payment is successful, update the status
        statusDiv.textContent = `Payment of KES ${amount} has been successfully received!`;
        statusDiv.style.color = 'green';

        // Reset the form
        document.getElementById('payment-form').reset();
    }, 2000); // Simulate a 2-second delay
});
