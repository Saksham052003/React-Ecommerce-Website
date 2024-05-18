import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ProductDetail = ({ data }) => {
    const { id } = useParams();
    console.log("Received id:", id);
    
    const product = data.find(product => product.id === parseInt(id));
    console.log("Found product:", product);

    const [quantity, setQuantity] = useState(1); // State to manage quantity

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };

    const handleAddToCart = () => {
        // Create a new JSON object with the product data and quantity
        const cartItem = {
            id: product.id,
            product_name: product.product_name,
            price: product.price,
            quantity: quantity,
            image:  product.image      
        };
        
        // Fetch the existing cart data from local storage or initialize an empty array
        const existingCartData = JSON.parse(localStorage.getItem("cartData")) || [];
        
        // Add the new item to the cart data
        const updatedCartData = [...existingCartData, cartItem];
        
        // Save the updated cart data to local storage
        localStorage.setItem("cartData", JSON.stringify(updatedCartData));

        // Optionally, you can display a message or perform any other action after adding to cart
        alert("Product added to cart!");
    };
  
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <Header />
            <section className="products py-5 my-5" id="products"> 
                <div className="container"> 
                    <div className="section_title text-center mb-5"> 
                        <h1 className="text-capitalize">Product Detail</h1> 
                    </div>
                    <div className="row" id="product-details"> 
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={product.image} className="img-fluid" alt={product.product_name}/>
                                </div>
                                <div className="col-md-6">
                                    <h2>{product.product_name}</h2>
                                    <p>Category: {product.category}</p>
                                    <p>Rating: {product.rating}</p>
                                    <p>Price: ₹{product.price}</p>
                                    <p>{product.about_product}</p>
                                    <div className="qty_section border-top pt-2 mb-4">
                                        <label>Quantity</label>
                                        <input 
                                            className="quantity text-center" 
                                            min="0" 
                                            max="10" 
                                            name="quantity" 
                                            value={quantity} 
                                            onChange={handleQuantityChange} 
                                            type="number"
                                        /> 
                                    </div>
                                    <div className="buy"> 
                                        <button 
                                            className="btn btn-primary shadow" 
                                            id="addToCart"
                                            onClick={handleAddToCart} // Call handleAddToCart function onClick
                                        >
                                            Add to Cart
                                        </button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            <Footer />
        </div>
    );
};

export default ProductDetail;
