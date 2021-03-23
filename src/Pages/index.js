import React from 'react';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('./Home'), { ssr: false });

export const IndexPage = () => <Home />;

IndexPage.getInitialProps = () => {
	return { namespacesRequired: ['common'] };
};

export default IndexPage;
