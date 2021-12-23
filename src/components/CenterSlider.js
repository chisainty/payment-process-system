import { useState, useRef } from "react";
import Slider from "react-slick";
import { IoIosAddCircle } from "react-icons/io";
import { StyledCenterSlider, Quantity } from "./styles/CenterSlider.styled";

const CenterSlider = () => {
  const [bottle, setBottle] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(0);

  const [data, setData] = useState([
    {
      img: "main.png",
      id: 0,
      quantity: 1,
    },
    {
      img: "main.png",
      id: 1,
      quantity: 1,
    },
    {
      img: "main.png",
      id: 2,
      quantity: 1,
    },
    {
      img: "main.png",
      id: 3,
      quantity: 1,
    },
  ]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "70px",
    slidesToShow: 1,
    speed: 500,
  };

  const incrementBottle = () => {
    setBottle(bottle + 1);
    const array = data.filter((item) => {
      return item.id === currentProduct;
    });
    console.log(array);
  };

  return (
    <>
      <StyledCenterSlider>
        <Slider
          {...settings}
          onSwipe={() => setBottle(1)}
          afterChange={(index) => setCurrentProduct(index)}
        >
          {data.map((data, index) => {
            return (
              <div key={index}>
                <img src={"images/products/" + data.img} alt="main" />
                <img src="images/icons/check.png" alt="check" />
              </div>
            );
          })}
        </Slider>
        <Quantity>
          <span>Quantity</span>
          <div>
            <img src="images/icons/bottle.svg" alt="" />
            <span>{bottle}</span>
            <span>Bottle</span>
            <IoIosAddCircle onClick={incrementBottle} />
          </div>
        </Quantity>
      </StyledCenterSlider>
    </>
  );
};

export default CenterSlider;
