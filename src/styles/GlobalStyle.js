import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset}
	${({ theme }) => {
		return css`
      * {
        font-size: 25px;
		  }
		`
	}}
`;

export default GlobalStyle;