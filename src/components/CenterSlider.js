import Slider from "react-slick";
import { StyledCenterSlider } from "./styles/CenterSlider.styled";

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
      </StyledCenterSlider>
    </>
  );
};

export default CenterSlider;
