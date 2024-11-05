const getAllProductsQuery = () => {
    return `
    SELECT 
    products.id,
    products.product_name, 
    products.price,
    CONCAT('[', GROUP_CONCAT(CONCAT('"', images.image_link, '"') SEPARATOR ', '), ']') AS image_links
FROM 
    products 
INNER JOIN 
    images ON images.product_id = products.id
GROUP BY 
    products.id;`
}

const getProductInfoQuery = (productID:number) => {
    return `
    SELECT
        *
    FROM
        products WHERE id = ${productID}`
}

const getConfirmationInfoQuery = () => {
    return `
    SELECT orders.user_id, orders.total_price, order_items.order_id, products.product_name, products.price, products.description
    FROM orders
    INNER JOIN order_items ON orders.id = order_items.order_id
    INNER JOIN products ON products.id = order_items.product_id
    `

}

const postNewProductQuery = () => {
    return `
    INSERT INTO 
        products (product_name, price, type, material, color, state, description, in_stock, user_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
}


exports.getAllProductsQuery = getAllProductsQuery
exports.getProductInfoQuery = getProductInfoQuery
exports.getConfirmationInfoQuery = getConfirmationInfoQuery 
exports.postNewProductQuery = postNewProductQuery