import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Cart = () => {
    // Initialize cart data state with data from local storage or an empty array
    const [cartData, setCartData] = useState(() => {
        const storedData = localStorage.getItem("cartData");
        return storedData ? JSON.parse(storedData) : [];
    });

    // Function to update the local storage with the new cart data
    const updateLocalStorage = (updatedData) => {
        localStorage.setItem("cartData", JSON.stringify(updatedData));
        setCartData(updatedData);
    };

    // Function to decrease quantity
    const decreaseQuantity = (index) => {
        const updatedCartData = [...cartData];
        updatedCartData[index].quantity = Math.max(updatedCartData[index].quantity - 1, 1);
        updateLocalStorage(updatedCartData);
    };

    // Function to increase quantity
    const increaseQuantity = (index) => {
        const updatedCartData = [...cartData];
        updatedCartData[index].quantity++;
        updateLocalStorage(updatedCartData);
    };

    // Function to delete item from cart
    const deleteItem = (index) => {
        const updatedCartData = [...cartData];
        updatedCartData.splice(index, 1);
        updateLocalStorage(updatedCartData);
    };

    // Calculate total amount and product quantities
    const totalAmount = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const productQuantities = cartData.reduce((acc, item) => {
        acc[item.product_name] = acc[item.product_name] ? acc[item.product_name] + item.quantity : item.quantity;
        return acc;
    }, {});

    // Function to handle navigation to payment
    const handlePaymentNavigation = () => {
        localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
    };

    return (
        <div>
            <Header />
            <section className="cart py-5 my-5" id="cart"> 
                <div className="container"> 
                    <div className="row cart-section">
                        <div className="col-md-8 cart-items">
                            <div className="section_title text-center mb-5">
                                <h1 className="text-capitalize">Cart</h1>
                            </div>
                            <div className="row mb-3">
                                {cartData && cartData.length > 0 ? (
                                    cartData.map((item, index) => (
                                        <div className="col-md-12" key={item.id}>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img src={item.image} alt={item.product_name} className="img-fluid"/>
                                                </div>
                                                <div className="col-md-9">
                                                    <h2>{item.product_name}</h2>
                                                    <p>Price: ₹{item.price}</p>
                                                    <div className="quantity-control">
                                                        <button className="btn btn-secondary btn-sm" onClick={() => decreaseQuantity(index)}>-</button>
                                                        <span>{item.quantity}</span>
                                                        <button className="btn btn-secondary btn-sm" onClick={() => increaseQuantity(index)}>+</button>
                                                    </div>
                                                    <button className="btn btn-danger mt-2" onClick={() => deleteItem(index)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center">Your cart is empty.</p>
                                )}
                            </div>
                        </div>
                        {/* Order Details */}
                        <div className="col-md-4 order-details">
                            <h2 className="text-capitalize">Order Details</h2>
                            <p>Total Amount: ₹{totalAmount}</p>
                            <h3>Product Quantities</h3>
                            <ul>
                                {Object.entries(productQuantities).map(([productName, quantity]) => (
                                    <li key={productName}>
                                        {productName}: {quantity} (Total: ₹{quantity * cartData.find(item => item.product_name === productName).price})
                                    </li>
                                ))}
                            </ul>
                            <Link className="btn btn-danger mt-2" to="/payment" onClick={handlePaymentNavigation}>
                                Payments
                            </Link>
                        </div>
                    </div>
                </div> 
            </section>
            <Footer />
        </div>
    );
};

export default Cart;
