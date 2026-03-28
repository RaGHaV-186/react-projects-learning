function ProductCard({name,price,instock}){
    return (
        <div>
            <h2>{name}</h2>
            <h2>Price:{price}$</h2>
            <h2>{instock ? "Avaiable":"Out of stock"}</h2>
        </div>
    )
}

export default ProductCard