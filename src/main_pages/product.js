import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import data from './Data/data.json';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFull, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

const faStar = <FontAwesomeIcon icon={faStarFull} className="text-warning" />;
const faStarHalf = <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />;
const faStarO = <FontAwesomeIcon icon={faStarEmpty} className="text-warning" />;

const Product = () => {
  // State variables to hold the product data and the selected categories
  const [jsonData, setJsonData] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  // Fetch data on component mount
  useEffect(() => {
    setJsonData(data);
    const script1 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
    script1.integrity = "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj";
    script1.crossOrigin = "anonymous";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js";
    script2.integrity = "sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN";
    script2.crossOrigin = "anonymous";
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
    script3.integrity = "sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV";
    script3.crossOrigin = "anonymous";
    document.body.appendChild(script3);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  // Function to handle category click events
  const handleCategoryClick = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      if (selectedCategories.includes("All")) {
        setSelectedCategories([category]);
      } else {
        if (selectedCategories.includes(category)) {
          setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
        } else {
          setSelectedCategories([...selectedCategories, category]);
        }
      }
    }
  };
  

  // Function to check if a category is selected
  const isCategorySelected = (category) => selectedCategories.includes(category);

  // Filter products based on selected categories
  const filteredProducts = selectedCategories.includes("All") ? jsonData : jsonData.filter(product => selectedCategories.includes(product.category));

  // Render UI
  return (
    <div>
      <Header />
      <section className="products py-5 my-5" id="products"> 
        <div className="container"> 
          <div className="section_title text-center mb-5"> 
            <h1 className="text-capitalize">Products</h1> 
          </div> 
          <div className="row justify-content-start"> 
            <div className="sidebar col-md-4 col-12">
              <h4 className="border-bottom">Filters</h4>
              <label><b>Category</b></label> 
              <ul id="category-list" className="list-group"> 
                {/* Render category list with active class based on selected state */}
                <li className={"list-group-item" + (isCategorySelected("All") ? " active" : "")} onClick={() => handleCategoryClick("All")}>All Product</li> 
                <li className={"list-group-item" + (isCategorySelected("Electronics") ? " active" : "")} onClick={() => handleCategoryClick("Electronics")}>Electronics</li> 
                <li className={"list-group-item" + (isCategorySelected("Clothes") ? " active" : "")} onClick={() => handleCategoryClick("Clothes")}>Clothes</li> 
                <li className={"list-group-item" + (isCategorySelected("Console Games") ? " active" : "")} onClick={() => handleCategoryClick("Console Games")}>Console Games</li> 
                <li className={"list-group-item" + (isCategorySelected("Food") ? " active" : "")} onClick={() => handleCategoryClick("Food")}>Food</li>
                <li className={"list-group-item" + (isCategorySelected("Kitchen Product") ? " active" : "")} onClick={() => handleCategoryClick("Kitchen Product")}>Kitchen Product</li> 
              </ul>                
            </div>
            <div className="col-md-8 col-12">
              <div id="product-list" className="row">
                {/* Render filtered products */}
                {jsonData && filteredProducts.map(product => (
                  <div key={product.id} className="col-md-4 col-12">
                    <div className="single_product shadow text-center p-1 position-relative">
                      <div className="product_img">
                        <Link to={`/product_detail/${product.id}`}>
                          <img src={product.image} alt={product.product_name} />
                          
                        </Link>
                      </div>
                      <div className="product-caption my-3">
                        <div className="product-ratting">
                          {/* Generate rating stars */}
                          {generateRatingStars(product.rating).map((star, index) => (
                            <span key={index}>{star}</span>
                          ))}
                        </div>
                        <h4><Link to={`/product_detail/${product.id}`}>{product.product_name}</Link></h4>
                        <div className="price">
                          <b><span className="mr-1">₹</span><span>{product.price}</span></b>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> 
        </div> 
      </section>
      <Footer />
    </div>
  );
};

// Function to generate rating stars
function generateRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(faStar);
  }

  // Add half star if applicable
  if (hasHalfStar) {
    stars.push(faStarHalf);
  }

  // Add empty stars to complete 5 stars
  const emptyStarsCount = Math.max(5 - Math.ceil(rating), 0);
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(faStarO);
  }

  return stars;
}

export default Product;
