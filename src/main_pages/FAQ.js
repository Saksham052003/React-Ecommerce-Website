import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const FAQ = () => {
    return (
        <div>
            <Header />
            <div className="container py-5 my-5">
                <h1 className="text-center mb-5">Frequently Asked Questions</h1>
                <div className="accordion" id="faqAccordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How do I create an account?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                            <div className="card-body">
                                Creating an account is simple. Click on the 'Sign Up' button at the top right corner of the homepage, fill in the required details, and submit the form. You will receive a confirmation email to activate your account.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What payment methods do you accept?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                            <div className="card-body">
                                We accept a variety of payment methods including credit cards (Visa, MasterCard, American Express), debit cards, and PayPal. All payments are securely processed to ensure your information is protected.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How do I track my order?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div className="card-body">
                                Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number on our website under 'Track Order' to see the status of your shipment.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFour">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    What is your return policy?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#faqAccordion">
                            <div className="card-body">
                                We offer a 30-day return policy on most products. If you are not satisfied with your purchase, you can return it within 30 days of delivery for a full refund or exchange. Please ensure the product is in its original condition and packaging.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFive">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    How do I contact customer support?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#faqAccordion">
                            <div className="card-body">
                                Visit the contact us section.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQ;
