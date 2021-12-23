import Slider from "react-slick";
import { IoIosAddCircle } from "react-icons/io";
import { StyledCenterSlider, Quantity } from "./styles/CenterSlider.styled";

const CenterSlider = () => {
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
            <img src="" alt="" />
            <span>1</span>
            <span></span>
          </div>
          <IoIosAddCircle />
        </Quantity>
      </StyledCenterSlider>
    </>
  );
};

export default CenterSlider;
