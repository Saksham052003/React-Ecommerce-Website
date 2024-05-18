import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
    return (
        <div>
            <Header />
            <div className="container py-5 my-5">
                <h1 className="text-center mb-5">About Us</h1>
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            Welcome to our eCommerce website! We are a team of passionate students from the 8th semester of the B.Tech Software Engineering program.
                        </p>
                        <p>
                            This website is our final year project, where we aim to create a seamless online shopping experience using React. Our goal is to provide a user-friendly interface for customers to browse and purchase a wide range of products from various categories.
                        </p>
                        <p>
                            We are committed to delivering high-quality service and ensuring customer satisfaction. Feel free to explore our website and discover the latest trends in electronics, clothes, console games, food, and kitchen products.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
