var cart = {};

// Product Data
var products = [
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 }
];

function renderProducts() {
    var productList = document.getElementById("product-list");
    productList.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        var product = products[i];

        var productDiv = document.createElement("div");
        productDiv.classList.add("product_area");

        productDiv.innerHTML = `
            <p class="Pname">${product.name}</p>
            <p class="Pprice">${product.price}</p>
            <div class="btn_P_M">
                <button onclick="addToCart(${product.id})">+</button>
                <span id="quantity-${product.id}">0</span>
                <button onclick="removeFromCart(${product.id})">-</button>
            </div>`;

        productList.appendChild(productDiv);
    }
}

function addToCart(productId) {
    if (!cart[productId]) {
        cart[productId] = 0;
    }
    cart[productId]++;
    document.getElementById("quantity-" + productId).innerText = cart[productId];
    updateCart();
}

function removeFromCart(productId) {
    if (cart[productId] && cart[productId] > 0) {
        cart[productId]--;
        document.getElementById("quantity-" + productId).innerText = cart[productId];
        updateCart();
    }
}

function updateCart() {
    var cartItems = document.getElementById("cart-items");
    var totalPriceElement = document.getElementById("total-price");

    cartItems.innerHTML = ""; // Clear previous cart items
    var totalPrice = 0;
    var cartEmpty = true;

    var cartKeys = Object.keys(cart);

    for (var i = 0; i < cartKeys.length; i++) {
        var id = parseInt(cartKeys[i]); // Convert key to number
        var quantity = cart[id];

        if (quantity > 0) {
            cartEmpty = false;
            
            var product;
            for (var j = 0; j < products.length; j++) {
                if (products[j].id === id) {
                    product = products[j];
                    break;
                }
            }

            totalPrice += product.price * quantity;

            var cartDiv = document.createElement("div");
            cartDiv.classList.add("product_area");
            cartDiv.innerHTML = `
                <p class="Pname">${product.name}</p>
                <p>${quantity} x</p>
                <p>${product.price}</p>
            `;
            cartItems.appendChild(cartDiv);
        }
    }

    if (cartEmpty) {
        cartItems.innerHTML = "<p>No Product added to the cart</p>";
    }

    totalPriceElement.innerText = "Total: €" + totalPrice;
}

// Initialize
renderProducts();
