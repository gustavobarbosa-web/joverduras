import React, { Component } from "react";
import Slider from "react-slick";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import "./slider.scss";

export default class Slides extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
        <div className="slide-item green">
            <img src={icon1} alt="Ícone" />
            <h3>Produtos frescos</h3>
            <p>
              Você recebe o produto direto da colheita e, por isso, sempre frescos.
            </p>
          </div>
          <div className="slide-item purple">
            <img src={icon2} alt="Ícone" />
            <h3>100% Naturais</h3>
            <p>
              Nós garantimos um produto de qualidade com grande parte de suas propriedades vitamínicas, antioxidantes e nutrientes.
            </p>
          </div>
          <div className="slide-item yellow">
            <img src={icon3} alt="Ícone" />
            <h3>Preços justos</h3>
            <p>
              Você pode ter o melhor das hortaliças sem gastar mais por isso.
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}