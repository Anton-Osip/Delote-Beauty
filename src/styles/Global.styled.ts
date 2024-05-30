import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

export const GlobalStyled = createGlobalStyle`
@font-face {
	font-family: 'Cormorant Garamond';
	src: url('../assets/fonts/CormorantGaramond-Bold.eot') format('embedded-opentype'),
		url('../assets/fonts/CormorantGaramond-Bold.woff2') format('woff2'),
		url('../assets/fonts/CormorantGaramond-Bold.woff') format('woff'),
		url('../assets/fonts/CormorantGaramond-Bold.ttf') format('truetype');
	font-weight: bold;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Cormorant Garamond';
	src: url('../assets/fonts/CormorantGaramond-Regular.eot?') format('embedded-opentype'),
		url('../assets/fonts/CormorantGaramond-Regular.woff2') format('woff2'),
		url('../assets/fonts/CormorantGaramond-Regular.woff') format('woff'),
		url('../assets/fonts/CormorantGaramond-Regular.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Cormorant Garamond';
	src: url('../assets/fonts/CormorantGaramond-SemiBold.eot?') format('embedded-opentype'),
		url('../assets/fonts/CormorantGaramond-SemiBold.woff2') format('woff2'),
		url('../assets/fonts/CormorantGaramond-SemiBold.woff') format('woff'),
		url('../assets/fonts/CormorantGaramond-SemiBold.ttf') format('truetype');
	font-weight: 600;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'EB Garamond';
	src: url('../assets/fonts/EBGaramond-Bold.eot?') format('embedded-opentype'),
		url('../assets/fonts/EBGaramond-Bold.woff2') format('woff2'),
		url('../assets/fonts/EBGaramond-Bold.woff') format('woff'),
		url('../assets/fonts/EBGaramond-Bold.ttf') format('truetype');
	font-weight: bold;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'EB Garamond';
	src: url('../assets/fonts/EBGaramond-Regular.eot?') format('embedded-opentype'),
		url('../assets/fonts/EBGaramond-Regular.woff2') format('woff2'),
		url('../assets/fonts/EBGaramond-Regular.woff') format('woff'),
		url('../assets/fonts/EBGaramond-Regular.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

	*,
	*::before,
	*::after{
		margin: 0;
		padding:0;
		box-sizing:border-box
	}

	body {
		margin: 0;
		font-family:"Cormorant Garamond;", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color:${theme.colors.font};
		line-height: 1.2;
	}

	a{
		text-decoration:none;
		color:inherit;
		cursor:pointer;
	}
	ul{
		list-style:none;
	}
	button{background-color: unset;border:none;cursor:pointer;color:inherit;}
`
