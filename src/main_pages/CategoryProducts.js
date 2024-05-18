import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from './Data/data.json';
import Header from './Header';
import Footer from './Footer';

const CategoryProducts = () => {
  const { category } = useParams();

  // Filter products based on the category parameter
  const filteredProducts = data.filter(product => product.category === category);

  // Function to generate rating stars
  const generateRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}><i className="fas fa-star"></i></span>);
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(<span key="half"><i className="fas fa-star-half-alt"></i></span>);
    }

    // Add empty stars to complete 5 stars
    const emptyStarsCount = Math.max(5 - Math.ceil(rating), 0);
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(<span key={i + fullStars}><i className="far fa-star"></i></span>);
    }

    return stars;
  };

  return (
    <dev>
        <Header />
    <div className="container">
      <h2 className="text-center mt-5 mb-3">Products in {category}</h2>
      <div className="row">
        {/* Map through filtered products and render each product */}
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 col-12 mb-4">
            <div className="single_product shadow text-center p-1 position-relative">
              <div className="product_img">
                <Link to={`/product_detail/${product.id}`}>
                  <img src={product.image} alt={product.product_name} />
                </Link>
              </div>
              <div className="product-caption my-3">
                <div className="product-ratting">
                  {generateRatingStars(product.rating)}
                </div>
                <h4 className="mt-2">
                  <Link to={`/product_detail/${product.id}`}>{product.product_name}</Link>
                </h4>
                <div className="price">
                  <b><span className="mr-1">₹</span>{product.price}</b>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </dev>
  );
};

export default CategoryProducts;
