import { ServerStyleSheets } from '@material-ui/core';
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href={'ico/apple-touch-icon.png'} />
					<link rel="icon" type="image/png" sizes="32x32" href={'ico/favicon.png'} />
					<link rel="icon" type="image/png" sizes="16x16" href={'ico/favicon.png'} />
					<link rel="manifest" href={'/site.webmanifest'} />
					<link rel="shortcut icon" href={'/ico/favicon.ico'} />
					<link rel="stylesheet" href={'/fonts/stylesheet.css'} />
					<link rel="stylesheet" href={'/css/slick-theme.css'} />
					<link rel="stylesheet" href={'/css/chatbox.css'} />
					<link rel="stylesheet" href={'/css/default.css'} />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script src={'/scripts/facebook-pixel.js'} />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	// css
	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		styles: [
			<React.Fragment key="styles">
				{initialProps.styles}
				{sheets.getStyleElement()}
			</React.Fragment>,
		],
	};
};

export default MyDocument;
