import React, { Component } from "react";
import Slider from "react-slick";
import './brand.scss';

import brands1 from '../../assets/brands/brands1.png';
import brands2 from '../../assets/brands/brands2.png';
import brands3 from '../../assets/brands/brands3.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Brand extends Component {
  render() {
          
    if (window.matchMedia("(min-width: 750px)").matches) {
      var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      };
    }
    else {
      var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    }
    
    return (
      <div className="slider-brands">
        <Slider {...settings}>
          <div className="brands">
            <img src={brands1} alt=""/>
          </div>
          <div className="brands">
            <img src={brands2} alt=""/>
          </div>
          <div className="brands">
            <img src={brands3} alt=""/>
          </div>
          <div className="brands">
            <img src={brands1} alt=""/>
          </div>
          <div className="brands">
            <img src={brands2} alt=""/>
          </div>
          <div className="brands">
            <img src={brands3} alt=""/>
          </div>
          <div className="brands">
            <img src={brands1} alt=""/>
          </div>
          <div className="brands">
            <img src={brands2} alt=""/>
          </div>
          <div className="brands">
            <img src={brands3} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}