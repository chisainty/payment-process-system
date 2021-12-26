import { useState, useEffect } from "react";
import Slider from "react-slick";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import {
  StyledCenterSlider,
  Quantity,
  StyledRounded,
} from "./styles/CenterSlider.styled";

const CenterSlider = () => {
  const [bottle, setBottle] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(0);

  const [data, setData] = useState([
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
    {
      img: "main.png",
      id: 4,
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
    // const index = data.findIndex((item) => {
    //   return item.id === currentProduct;
    // });

    //increment the quantity of the product by one
    data[currentProduct].quantity += 1;
    setData([...data]);

    //display the product details by it ID
    displayProduct(data[currentProduct].id);
  };

  const decrementBottle = () => {
    // const index = data.findIndex((item) => {
    //   return item.id === currentProduct;
    // });

    //increment the quantity of the product by one
    data[currentProduct].quantity -= 1;
    setData([...data]);

    //display the product details by it ID
    displayProduct(data[currentProduct].id);
  };


  const swipeAction = (index) => {
    setCurrentProduct(index);
    displayProduct(data[index].id);
  };

  const displayProduct = (id) => {
    const array = data.filter((item) => {
      return item.id === id;
    });
    setBottle(array[0].quantity);
  };

  useEffect(() => {
    //update the bottle quantity fro the current product
    displayProduct(data[currentProduct].id);
  }, [data]);

  return (
    <>
      <StyledCenterSlider>
        <Slider
          {...settings}
          onSwipe={() => setBottle(1)}
          afterChange={(index) => swipeAction(index)}
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
          <StyledRounded>
            <IoIosRemove onClick={decrementBottle}/>
          </StyledRounded>
          <div>
            <span>Quantity</span>
            <div>
              <img src="images/icons/bottle.svg" alt="" />
              <span>{bottle}</span>
              <span>Bottle</span>
            </div>
          </div>
          <StyledRounded>
            <IoIosAdd onClick={incrementBottle} />
          </StyledRounded>
        </Quantity>
      </StyledCenterSlider>
    </>
  );
};

export default CenterSlider;
