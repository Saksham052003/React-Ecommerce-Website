import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const SuccessfullPay = () => {
    const [latestTransaction, setLatestTransaction] = useState(null);

    useEffect(() => {
        // Retrieve transactions from local storage
        const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
        if (transactions.length > 0) {
            // Get the latest transaction (last one in the array)
            const latestTransaction = transactions[transactions.length - 1];
            setLatestTransaction(latestTransaction);
        }
    }, []);

    return (
        <div>
            <Header />
            <div className="container py-5 my-5">
                <h1 className="text-center mb-5">Payment Successful</h1>
                {latestTransaction && (
                    <div className="text-center">
                        <p>Your Transaction ID is: <strong>{latestTransaction.transactionId}</strong></p>
                        <p>Name: <strong>{latestTransaction.name}</strong></p>
                        <p>Payment: <strong>{latestTransaction.totalAmount}</strong></p>
                        
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default SuccessfullPay;
