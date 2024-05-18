import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import data from "./Data/data.json";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setSearchResults([]);
        } else {
            const results = data.filter(item =>
                item.product_name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        }
    }, [searchQuery]);

    return (
        <div>
            <Header />
            <div className="container py-5 my-5">
                <h1 className="text-center mb-5">Search</h1>
                <form onSubmit={(e) => e.preventDefault()} className="search-form">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </form>
                <div className="search-results mt-5">
                    {searchQuery && searchResults.length === 0 ? (
                        <p>No results found</p>
                    ) : (
                        searchResults.map((result, index) => (
                            <div key={index} className="search-result-item card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <Link to={`/product_detail/${result.id}`}>
                                            <img src={result.image} className="card-img" alt={result.product_name} />
                                        </Link>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <Link to={`/product_detail/${result.id}`} style={{ textDecoration: 'none' }}>{result.product_name}</Link>
                                            </h5>
                                            <p className="card-text"><strong>Price:</strong> ₹{result.price}</p>
                                            <p className="card-text"><strong>Rating:</strong> {result.rating}</p>
                                            <p className="card-text"><strong>Category:</strong> {result.category}</p>
                                            <p className="card-text">{result.about_product}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Search;
