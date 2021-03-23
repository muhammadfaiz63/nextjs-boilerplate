import React from 'react';
// import BackdropTransitionPage from '@atoms/BackdropTransition';
import dynamic from 'next/dynamic';

// const PatientHome = dynamic(() => import('@app/patient/Home'), { ssr: false, loading: BackdropTransitionPage});

const Home = () => {
	return "test";
};

Home.getInitialProps = async (ctx) => {
	return {
		namespacesRequired: ['common', 'home'],
	};
};

export default Home;
