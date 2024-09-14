import styled from "styled-components";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import logo from "../assets/LogoONI.svg";
import mmpot from "../assets/MMbotBg.png";
import "slick-carousel/slick/slick-theme.css";
const Onibosts = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Wapper>
      <div className="slider-container">
      <ContainerSlices>
        <Slider {...settings}>
          {arr?.map((item, index) => {
            return (
              <Acnter>
                <TikAll>
                  <h1>{item.title}</h1>
                  <Boderth>
                    <img src={item.logo} />
                    <p>{item.crebost}</p>
                  </Boderth>
                </TikAll>
                <UlASS>
                  <ul>
                    <li style={{ display: "flex", gap: "10px" }}>
                      <span></span>
                      <div>
                        <h1>{item.Liquidity}</h1>
                        <p>{item.conten}</p>
                      </div>
                    </li>
                  </ul>
                  <ul>
                    <li style={{ display: "flex", gap: "10px" }}>
                      <span></span>
                      <div>
                        <h1>{item.Ordertitle}</h1>
                        <p>{item.oder}</p>
                      </div>
                    </li>
                  </ul>
                  <ul>
                    <li style={{ display: "flex", gap: "10px" }}>
                      <span></span>
                      <div>
                        <h1>{item.Consistent}</h1>
                        <p>{item.contens}</p>
                      </div>
                    </li>
                  </ul>
                </UlASS>
              </Acnter>
            );
          })}
        </Slider>
      </ContainerSlices>
      </div>
    </Wapper>
  );
};
export default Onibosts;
const arr = [
  {
    title: "Market Making Bot",
    crebost: "Create Bot",
    logo: logo,
    Liquidity: "Liquidity Provision",
    conten: "Contribute to deep liquidity pools, ensuring efficient trading.",
    Ordertitle: "Order Balancing",
    oder: "Maintain a balanced order book, promoting fair pricing.",
    Consistent: "Consistent Profits",
    contens: "Generate stable returns in various market conditions.",
  },
  {
    title: "Market Making Bot",
    crebost: "Create Bot",
    logo: logo,
    Liquidity: "Liquidity Provision",
    conten: "Contribute to deep liquidity pools, ensuring efficient trading.",
    Ordertitle: "Order Balancing",
    oder: "Maintain a balanced order book, promoting fair pricing.",
    Consistent: "Consistent Profits",
    contens: "Generate stable returns in various market conditions.",
  },
  {
    title: "Market Making Bot",
    crebost: "Create Bot",
    logo: logo,
    Liquidity: "Liquidity Provision",
    conten: "Contribute to deep liquidity pools, ensuring efficient trading.",
    Ordertitle: "Order Balancing",
    oder: "Maintain a balanced order book, promoting fair pricing.",
    Consistent: "Consistent Profits",
    contens: "Generate stable returns in various market conditions.",
  },
  {
    title: "Market Making Bot",
    crebost: "Create Bot",
    logo: logo,
    Liquidity: "Liquidity Provision",
    conten: "Contribute to deep liquidity pools, ensuring efficient trading.",
    Ordertitle: "Order Balancing",
    oder: "Maintain a balanced order book, promoting fair pricing.",
    Consistent: "Consistent Profits",
    contens: "Generate stable returns in various market conditions.",
  },
];
const Wapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 40px;
  .slick-prev {
    position: absolute;
    top: 0px;
    right: 80px;
    left: unset;
    transform: translateY(-150%);
    background-image: url(/img/btnClose.png);
    background-color: transparent;
    background-size: cover;
    width: 40px;
    aspect-ratio: 1 / 1;
    height: unset;
    border-radius: 50%;
    border: 1px solid rgb(187, 247, 198);

}
.slick-next, .byaUij .slick-prev {
    position: absolute;
    top: 0px;
    right: 20px;
    left: unset;
    transform: translateY(-150%);
    background-image: url(/img/btnClose.png);
    background-color: transparent;
    background-size: cover;
    width: 40px;
    aspect-ratio: 1 / 1;
    height: unset;
    border-radius: 50%;
    border: 1px solid rgb(187, 247, 198);
}
`;
const UlASS = styled.div`
  width: 100%;
  background-image: url(${mmpot});
  padding: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 8px;
  min-height: 300px;
  p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }
  span {
    border-radius: 9999px;
    background: var(--Mint-Green-300, #81ee97);
    width: 14px;
    height: 8px;
    display: flex;
    margin-top: 8px;
  }
`;
const Acnter = styled.div`
width: 95% !important;
  border: 1px solid rgb(105, 105, 105);
  gap: 49px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.145);
  padding: 16px;
  display: flex;
  flex-direction: column;
`;
const Boderth = styled.div`
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid rgb(187, 247, 198);
  background: rgba(35, 35, 35, 0.28);
  box-shadow: rgba(248, 248, 248, 0.6) 0px 0px 8px 0px inset,
    rgba(0, 0, 0, 0.4) 0px 8px 24px -8px;
`;
const TikAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: var(--Neutral-White, #abffbc);
    font-family: Rubik;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 4px;
  }
`;
const ContainerSlices = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
  flex-direction: column;
`;
