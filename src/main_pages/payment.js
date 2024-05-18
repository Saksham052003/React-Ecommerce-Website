import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { v4 as uuidv4 } from "uuid";
import cardValidator from 'card-validator';
import { Link, useNavigate } from "react-router-dom";

const Payment = () => {
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        nameOnCard: ""
    });
    const [cardType, setCardType] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);

    const [addressDetails, setAddressDetails] = useState({
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: ""
    });

    useEffect(() => {
        // Fetch total amount from local storage
        const storedTotalAmount = localStorage.getItem("totalAmount");
        setTotalAmount(storedTotalAmount ? JSON.parse(storedTotalAmount) : 0);
    }, []);

    // Function to identify RuPay cards based on BIN ranges
    const isRuPayCard = (number) => {
        const ruPayBins = [
            '508', '353', '356', '639', '6521', '6522', '60', '81', '82'
        ];
        // Check if the number starts with any of the specified RuPay BINs
        return ruPayBins.some(bin => number.startsWith(bin));
    };

    // Function to identify card type
    const identifyCardType = (number) => {
        if (isRuPayCard(number)) {
            return "RuPay";
        }
        const cardValidation = cardValidator.number(number);
        if (cardValidation.card) {
            return cardValidation.card.niceType;
        } else {
            return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name in paymentDetails) {
            if (name === "cardNumber") {
                const cardNumber = value.replace(/\s+/g, ''); // Remove spaces
                const cardType = identifyCardType(cardNumber);
                setCardType(cardType);
            }

            setPaymentDetails(prevDetails => ({
                ...prevDetails,
                [name]: value
            }));
        } else {
            setAddressDetails(prevDetails => ({
                ...prevDetails,
                [name]: value
            }));
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Payment processed successfully!");

        // Store current time and date
        const currentDate = new Date();
        const currentTime = currentDate.toLocaleString();

        // Generate and set a unique transaction ID
        const transactionId = uuidv4();

        // Combine all details into one object
        const newTransaction = {
            ...addressDetails,
            totalAmount,
            ...paymentDetails,
            transactionId,
            transactionTime: currentTime
        };

        // Retrieve existing transactions from local storage
        const existingTransactions = localStorage.getItem("transactions");
        const transactions = existingTransactions ? JSON.parse(existingTransactions) : [];

        // Add the new transaction to the array
        transactions.push(newTransaction);

        // Store the updated array back to local storage
        localStorage.setItem("transactions", JSON.stringify(transactions));

        // Navigate to success page
        navigate('/successfullPay', { replace: true });
    };

    return (
        <div>
            <Header />
            <div className="container py-5 my-5">
                <h1 className="text-center mb-5">Payment</h1>
                <form onSubmit={handleSubmit} className="payment-form">
                    <h2>Address Details</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={addressDetails.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            className="form-control"
                            value={addressDetails.street}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            className="form-control"
                            value={addressDetails.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            className="form-control"
                            value={addressDetails.state}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip">ZIP Code</label>
                        <input
                            type="text"
                            id="zip"
                            name="zip"
                            className="form-control"
                            value={addressDetails.zip}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            className="form-control"
                            value={addressDetails.country}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <h2>Payment Details</h2>
                    <div className="form-group">
                        <label htmlFor="nameOnCard">Name on Card</label>
                        <input
                            type="text"
                            id="nameOnCard"
                            name="nameOnCard"
                            className="form-control"
                            value={paymentDetails.nameOnCard}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            className="form-control"
                            value={paymentDetails.cardNumber}
                            onChange={handleChange}
                            required
                        />
                        {cardType && <p>Card Type: {cardType}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            className="form-control"
                            value={paymentDetails.expiryDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            className="form-control"
                            value={paymentDetails.cvv}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Total Amount</label>
                        <input
                            type="text"
                            className="form-control"
                            value={`₹${totalAmount}`}
                            readOnly
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Pay Now</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Payment;
