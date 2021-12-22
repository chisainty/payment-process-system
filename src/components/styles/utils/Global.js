import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https:fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:wght@700&display=swap');


		/* @font-face {
		font-family: "Railway";
		src: url("../fonts/railway/static/Raleway-Regular.ttf") format("truetype");
		} */

		* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		}

		body {
		font-family: "NotoSans", sans-serif;
		color: var(--primary-dark);
		overflow-x: hidden;
		}
`;
