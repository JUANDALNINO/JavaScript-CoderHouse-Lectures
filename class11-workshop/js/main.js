let categoriasSistema = [];

initApp();

function initApp() {
    loadData();
}

// --------------------------------------------

function loadData() {
    loadCategories();
    showCategories();
}

function loadCategories() {
    //const categorias = products.map(Element => Element.category);
    const categorias = products.map( function(element) {
        return element.category;
    // array.map() => permite iterar sobre un array y modificar sus elementos usando una función callback
    })

    const categoriasSet = new Set(categorias); // Set => obj de Js = crear colección con elementos únicos

    const categoriasUnicas = [...categoriasSet]; // Operador avanzado = spread operator (convierte a array)

    categoriasSistema = categoriasUnicas.map( function(element) {
        return {
            id: element,
            nombre: element,
        }
    })
}

function showCategories() {
    const divCategorias = document.getElementById("categoryMenu");
    categoriasSistema.forEach(element => {
        const btn = document.createElement("button");
        btn.classList.add("catBtn");
        btn.innerText = element.nombre;

        btn.addEventListener("click", () => {
            showProducts(element.nombre);
        })

        divCategorias.appendChild(btn);
    })
}

function showProducts(categoryName) {
    const productsToShow = products.filter(products=>products.category===categoryName);
    
    const categoryNode = document.getElementById("categoryName");
    categoryNode.innerText = categoryName.toUpperCase();

    /*Product List*/
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    productsToShow.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = 
        `<img src="${product.image}">
        <div class="productInfo">
            <div class="productName">
                ${product.title}
            </div>
            <br>
            <span class="productPrice">
                Price:<b>$${product.price} </b>
            </span> /
            <span class="productRate">
                Rate: <b> ${product.rating.rate} </b>
            </span>
           
        </div>
        <button class="addToList">
            Agregar al Carrito
        </button>`

        productList.appendChild(div);
    })
}