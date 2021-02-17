const loadProducts = (produtos, idDivParent) => {
    const parentDiv = document.querySelector(idDivParent)
    produtos.forEach(produto => {

        const html = `
    <article class="prato">
                    <img src="${produto.image}" alt="${produto.title}">
                    <h4>${produto.title}</h4>
                    <h4>${produto.value}</h4>
                    <p>${produto.description}</p>
                    <button type="button">Quero este prato</button>
                </article>
    `
        parentDiv.insertAdjacentHTML('beforeend', html)
    })
}

loadProducts(produtos, '#product-div')