import React from 'react';
import PropTypes from 'prop-types';

// import { withTranslation } from '@utils/';

const Error = ({ statusCode }) => <p>{statusCode ? ('error-with-status', { statusCode }) : ('error-without-status')}</p>;

Error.getInitialProps = async ({ res, err }) => {
	let statusCode = null;
	if (res) {
		({ statusCode } = res);
	} else if (err) {
		({ statusCode } = err);
	}
	return {
		namespacesRequired: ['common'],
		statusCode,
	};
};

Error.defaultProps = {
	statusCode: null,
};

Error.propTypes = {
	statusCode: PropTypes.number,
};

export default Error;
