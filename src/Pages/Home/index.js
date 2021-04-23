import React from 'react';
import dynamic from 'next/dynamic';
import LoadingBackdrop from '@atoms/BackdropTransition/BackdropTransition';

const ListData = dynamic(() => import('./Fragments/ListData'), { ssr: false, loading: LoadingBackdrop});
const CardData = dynamic(() => import('./Fragments/CardData'), { ssr: false, loading: LoadingBackdrop})

const Home = () => {	
	return (
		<div style={{marginTop:150}}>
		<ListData/>
		</div>
	);
};

Home.getInitialProps = async (ctx) => {
	return {
		namespacesRequired: ['common', 'home'],
	};
};

export default Home;
