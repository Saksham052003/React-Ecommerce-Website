import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const TransactionHistory = () => {
    // Retrieve transaction data from local storage
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    return (
        <div>
            <Header />
            <div className="container py-5 my-5">
                <h1 className="text-center mb-5">Transaction History</h1>
                {transactions.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Country</th>
                                <th>Zip</th>
                                <th>Total Amount</th>
                                <th>Transaction ID</th>
                                <th>Transaction Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.name}</td>
                                    <td>{transaction.city}</td>
                                    <td>{transaction.state}</td>
                                    <td>{transaction.country}</td>
                                    <td>{transaction.zip}</td>
                                    <td>{transaction.totalAmount}</td>
                                    <td>{transaction.transactionId}</td>
                                    <td>{transaction.transactionTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No transactions found</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default TransactionHistory;
