import React, { Component } from "react";
import Slider from "react-slick";
import { img1, img2, img3 } from "../assets";

export class ImageCarousel extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      //   centerMode: true,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="item 1" style={{ width: "400px" }} />
          </div>
          <div>
            <img src={img2} alt="Item 2" style={{ width: "400px" }} />
          </div>
          <div>
            <img src={img3} alt="Item 3" style={{ width: "400px" }} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ImageCarousel;
