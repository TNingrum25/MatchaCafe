// JavaScript source code
document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const item = document.getElementById("item").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;

    // Simple validation (if fields are not empty)
    if (!name || !email || !item || !quantity || !address) {
        alert("Please fill out all fields.");
        return;
    }

    // Process order (you can later replace this with an actual server-side API)
    const orderDetails = `
        Order Summary:
        Name: ${name}
        Email: ${email}
        Item: ${item}
        Quantity: ${quantity}
        Delivery Address: ${address}
    `;

    // Display confirmation message
    document.getElementById("orderResponse").innerHTML = `
        <p>Thank you for your order, ${name}! We will send a confirmation to your email: ${email}.<br> 
        ${orderDetails}
        </p>
    `;

    // Optionally, you can reset the form after submission
    document.getElementById("orderForm").reset();
});
