import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useCallback, useMemo, useState } from 'react';
import NoSsr from '@material-ui/core/NoSsr';

import Themes from '../Themes/Mui';

// const MainHeader = dynamic(() => import(`@molecules/MainHeader`), { ssr: false });

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
					<title>NextJS Landing Page</title>
					<meta name="description" content="NextJS Landing Page" />
					<meta charSet="UTF-8" />
					<meta name="robots" content="noindex nofollow" />
					<meta name="viewport" content="width=device-width" />
				</Head>
				{/* <MainHeader /> */}
				<ChildApp {...props} />
			</ThemeProvider>
		</NoSsr>
	);
};

export default MyApp;
