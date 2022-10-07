import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const [,productId] = itemClicked.id.split("--")
            let correctProduct = null
            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    correctProduct = product
                    window.alert(`This locally-sourced, gluten-free, organic ${product.name} cost $${product.price}.`)
                }
            }
        }
    }
)