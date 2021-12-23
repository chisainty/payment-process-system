import { useState } from "react";
import Slider from "react-slick";
import { IoIosAddCircle } from "react-icons/io";
import { StyledCenterSlider, Quantity } from "./styles/CenterSlider.styled";

const CenterSlider = () => {
  let bottle = useState(1);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "70px",
    slidesToShow: 1,
    speed: 500,
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
            <span>1</span>
            <span>Bottle</span>
            <IoIosAddCircle onClick={()=> bottle++} />
          </div>
        </Quantity>
      </StyledCenterSlider>
    </>
  );
};

export default CenterSlider;
