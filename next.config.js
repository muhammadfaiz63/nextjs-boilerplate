const css = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

require('dotenv').config();
const dotenv = require('dotenv');
const buf = Buffer.from('dotenv ready');
const opt = { debug: true };
dotenv.parse(buf, opt);

const localSubPath = {
	en: 'en',
	id: 'id',
};

// Bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.NODE_ENV !== 'production' && process.env.ANALYZE === 'true',
});

const nextConfig = {
	webpack(config, { dev }) {
		if (dev && process.env.NODE_ENV !== 'production') {
			config.devtool = 'cheap-module-source-map';
		}

		config.module.rules.push({
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000,
				},
			},
		});

		return config;
	},

	env: {
		API_URL: process.env.API_URL,
		PORT: process.env.PORT,
		DEFAULT_VERSION: process.env.DEFAULT_VERSION,
	},
	publicRuntimeConfig: {
		localeSubpaths: localSubPath,
	},
	compress: true,
};

module.exports = withPlugins([[css], [withBundleAnalyzer]], nextConfig);
