import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useCallback, useMemo, useState } from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import Themes from '../Themes/Mui';

const MainHeader = dynamic(() => import(`@organisms/Header/Header`), { ssr: false, loading : "loading..." });

const blacklistPathname = {
	'/_error': true,
	'/_404': true,
	'/error': true,
	'/404': true,
};

const MainHeaderPathName = {
	'':true,
	'/home': true,
	'/test': true,
	'/about': true
};

const ChildApp = ({ Component, pageProps, ...props }) => {
	return (
		<NoSsr>
			<CssBaseline />
			<Component {...pageProps} />
		</NoSsr>
	);
};

const MyApp = (props) => {
	return (
		<NoSsr>
			<ThemeProvider theme={Themes.default}>
				<Head>
					<title>NextJS Title</title>
					<meta name="description" content="NextJS Landing Page" />
					<meta charSet="UTF-8" />
					<meta name="robots" content="noindex nofollow" />
					<meta name="viewport" content="width=device-width" />
				</Head>
				{MainHeaderPathName && <MainHeader />}
				<ChildApp {...props} />
				{/* <Footer/> */}
			</ThemeProvider>
		</NoSsr>
	);
};

export default MyApp;
