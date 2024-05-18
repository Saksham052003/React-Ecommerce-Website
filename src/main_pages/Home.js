import React, { useEffect, useState } from 'react';
import data from './Data/data.json';
import firstimg from './images/first slide.jpg';
import secondimg from './images/second slide.jpg';
import thirdimg from './images/third slide.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFull, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";


const faStar = <FontAwesomeIcon icon={faStarFull} className="text-warning" />;
const faStarHalf = <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />;
const faStarO = <FontAwesomeIcon icon={faStarEmpty} className="text-warning" />;

const Home = () =>{
    const [jsonData, setJsonData] = useState(null);
  
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
  
  return (
    <div >
      {/* Header starts */}
      <Header />
      {/* Carousel Section Starts Here */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="4000">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={firstimg} className="d-block w-100" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img src={secondimg} className="d-block w-100" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img src={thirdimg} className="d-block w-100" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> 
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* Carousel Section ends Here */}

      {/* products starts here */}
      <section className="products py-5 my-5" id="products">
        <div className="container">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize">Latest Products</h1>
          </div>
          <div className="row" id="product-list">
          {jsonData && jsonData.slice(0,6).map(product => (
          <div key={product.id} className="col-md-4 col-12">
            <div className="single_product shadow text-center p-1 position-relative"> {/* Added position-relative */}
              <div className="product_img">
                <Link to={`/product_detail/${product.id}`}>
                    <img src={product.image} alt={product.product_name} />
                    <div className="new_product"> {/* Moved inside product_img */}
                        <span className="badge py-2 px-3 badge-pill badge-danger">New</span>
                    </div>
                </Link>
              </div>
              <div className="product-caption my-3">
                <div className="product-ratting">
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
      </section>
    {/* products ends here*/}

    {/*-- ==============feature starts here============== */}
<section class="feature py-5 mt-5" id="feature">
    <div class="container">
        <div class="section_title text-center mb-5">
            <h2 class="text-uppercase">Our Features</h2>
        </div>
        <div class="row">
            <div class="col-md-4 col-12">
                <div class="feature-item shadow">
                    <i class="fas fa-shipping-fast fa-3x mb-3"></i>
                    <h3>Free Shipping Method</h3>
                    <p>Free Shipping Method.</p>
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div class="feature-item shadow">
                    <i class="fas fa-lock fa-3x mb-3"></i>
                    <h3>Secure Payment System</h3>
                    <p>Secure Payment System.</p>
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div class="feature-item shadow">
                    <i class="fas fa-headphones fa-3x mb-3"></i>
                    <h3>24/7 Support</h3>
                    <p>Secure Payment System.</p>
                </div>
            </div>
        </div>
    </div>
</section> 
  {/*-- ==============feature ends here============== --*/}
      {/* ==============footer starts here============== --*/} 
<Footer />  
<div className="backtop">
  <a id="button" href="#top" className="btn btn-lg btn-outline-danger" role="button">
    <i className="fas fa-chevron-up text-dark"></i>
  </a>
</div> 
  {/*==============footer ends here============== */}
    </div>
  );
}

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

export default Home;