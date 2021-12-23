import { useState } from "react";
import Slider from "react-slick";
import { IoIosAddCircle } from "react-icons/io";
import { StyledCenterSlider, Quantity } from "./styles/CenterSlider.styled";

const CenterSlider = () => {
  const [bottle, setBottle] = useState(1);

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
  };

  return (
    <>
      <StyledCenterSlider>
        <Slider {...settings}>
          <div>
            <img src="images/products/main.png" alt="main" />
            <img src="images/icons/check.png" alt="check" />
          </div>
          <div>
            <img src="images/products/main.png" alt="main" />
            <img src="images/icons/check.png" alt="check" />
          </div>
          <div>
            <img src="images/products/main.png" alt="main" />
            <img src="images/icons/check.png" alt="check" />
          </div>
          <div>
            <img src="images/products/main.png" alt="main" />
            <img src="images/icons/check.png" alt="check" />
          </div>
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
