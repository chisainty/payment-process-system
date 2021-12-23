import styled from "styled-components";

export const StyledCenterSlider = styled.div`
  padding-top: 2rem;

  & .slick-slider {
    height: 20rem;
  }
  & .slick-list {
    overflow: visible;
  }

  & .slick-track {
    display: flex;
    overflow: visible;
  }

  & .slick-slide {
    background-color: #f6f6f8;
    height: 289px;
    width: 230px;
    margin-top: -2rem;
    margin-right: 0.5rem;
    border-radius: 0.6rem;
    margin-right: 1rem;
    transition: 0.5s;
    position: relative;
    z-index: 4000;
  }

  & .slick-active {
    color: #f1f1f1;
    margin-top: 10px;
  }

  & img {
    position: absolute;
  }

  & img:first-child {
    left: 50%;
    top: 0px;
    transform: translateX(-50%);
  }

  & img:last-child {
    right: -10px;
    top: 16px;
    width: 1.9rem;
    display: none;
  }

  & .slick-active img:last-child {
    display: block;
  }
`;

export const Quantity = styled.div`
  background-color: #f6f6f8;
  display: flex;
  padding: 1rem;
  width: 12rem;
  margin: auto;
  border-radius: 1rem;
`;

// export const Showcase = styled.div`
//   display: flex;
//   & ul {
//     list-style: none;
//   }

//   & ul > li {
//     display: inline-block;
//   }

//   & ul > li a {
//     text-decoration: none;
//     color: var(--primary-dark);
//   }

//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     position: absolute;
//     top: 60px;
//     left: 0;
//     background: #ffffff;
//     width: 100%;
//     display: ${({ display }) => display};
//     align-items: center;
//     flex-direction: column;
//     padding-bottom: 2rem;

//     & > div {
//       width: 100%;
//     }

//     & ul {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       padding: 0;
//     }

//     & ul li {
//       padding: 0.5rem 0;
//     }

//     & > div:last-child {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//     }

//     & > div:last-child a {
//       width: 240px;
//     }

//     & > div:last-child a:last-child {
//       margin-top: 1rem;
//       width: 240px;
//     }
//   }
// `;
