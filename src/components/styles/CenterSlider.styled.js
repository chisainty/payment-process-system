import styled from "styled-components";

export const StyledCenterSlider = styled.div`
  padding: 1rem 0 0 3rem;

  & .slick-active {
    background-color: #596273;
    color: #f1f1f1;
  }
`;

// export const Menu = styled.div`
//   display: none;

//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     display: block;
//   }
// `;

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
