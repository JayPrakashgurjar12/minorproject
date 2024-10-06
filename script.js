let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    document.getElementById('cart-count').innerText = cart.length;
    alert(`${productName} has been added to your cart.`);
}

function showCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(li);
    });
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('cart-modal').style.display = 'block';
}
// Search Functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) || product.type.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
});
// Function to display products
function displayProducts(productList) {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';

    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p>Type: ${product.type} | Price: $${product.price}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function checkout() {
    // Implement checkout functionality here
    alert("Proceeding to checkout...");
}

function filterProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        product.style.display = productName.includes(query) ? 'block' : 'none';
    });
}
// new login code
document.getElementById('loginIcon').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
};

document.getElementById('closeModal').onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
};

// Function to handle sending OTP
document.getElementById('sendOtpBtn').onclick = function() {
    const mobileNumber = document.getElementById('mobileNumber').value;
    if (mobileNumber) {
        // Simulate sending OTP
        document.getElementById('otpMessage').textContent = 'OTP sent successfully!';
        document.getElementById('mobileSection').style.display = 'none';
        document.getElementById('otpSection').style.display = 'block';
    } else {
        document.getElementById('otpMessage').textContent = 'Please enter a valid mobile number.';
    }
};

// Function to handle OTP verification
document.getElementById('verifyOtpBtn').onclick = function() {
    const otp = document.getElementById('otp').value;
    if (otp) {
        // Simulate successful registration
        document.getElementById('registrationMessage').textContent = 'You registered successfully!';
    } else {
        document.getElementById('registrationMessage').textContent = 'Please enter a valid OTP.';
    }
};

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
// feedback form
document.getElementById('submitFeedbackBtn').onclick = function() {
    const feedbackText = document.getElementById('feedbackText').value;
    if (feedbackText) {
        // Simulate successful feedback submission
        document.getElementById('feedbackMessage').textContent = 'Thank you for your feedback!';
        document.getElementById('feedbackText').value = ''; // Clear the textarea
    } else {
        document.getElementById('feedbackMessage').textContent = 'Please enter your feedback.';
    }
};
