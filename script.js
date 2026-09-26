let products = [];

function addProduct() {
    const name = document.getElementById("productName").value.trim();
    const price = document.getElementById("productPrice").value.trim();
    const category = document.getElementById("productCategory").value.trim();

    if (name === "" || price === "" || category === "") {
        alert("Please fill all the fields.");
        return;
    }

    const product = {
        name: name,
        price: price,
        category: category
    };

    products.push(product);

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";

    displayProducts();
}

function displayProducts() {
    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    products.forEach(function(product, index) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>₹${product.price}</td>
            <td>${product.category}</td>
            <td>
                <button
                    class="delete-btn"
                    onclick="deleteProduct(${index})">
                    Delete
                </button>
            </td>
        `;

        productList.appendChild(row);
    });
}

function deleteProduct(index) {
    const confirmDelete = confirm(
        "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
        products.splice(index, 1);
        displayProducts();
    }
}