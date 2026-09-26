function Product(props){
    return(
        <div>
            <p>Name:{props.name}</p>
            <p>Brand:{props.brand}</p>
            <p>Price:{props.price}</p>
        </div>
    );
}

export default Product;