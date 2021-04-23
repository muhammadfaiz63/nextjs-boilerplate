import React from 'react';
import dynamic from 'next/dynamic';

const Data = dynamic(() => import('./data'), { ssr: false });

export const IndexPage = () => <Data />;

IndexPage.getInitialProps = () => {
	return { namespacesRequired: ['common'] };
};

export default IndexPage;
