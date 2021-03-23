const BASE_URL_API = 'https://api.hooda.id' //
// const BASE_URL_SOCKET = 'http://202.83.121.243:100' //
const BASE_URL_ORDER = 'http://202.83.121.243:300' //
const BASE_URL_DRIVER = 'http://202.83.121.243:401' //
const BASE_URL_OSS_BUCKET_ORDER = 'https://hoodaordervolume.oss-ap-southeast-5.aliyuncs.com'
const BASE_URL_OSS_BUCKET_CUSTOMER = 'https://hoodacustomervolume.oss-ap-southeast-5.aliyuncs.com'
const BASE_URL_OSS_BUCKET_DRIVER = 'https://hoodadrivervolume.oss-ap-southeast-5.aliyuncs.com'
//server collocation : 'http://202.83.121.246:5017'
// URL OSS hooda order volume = 'https://hoodaordervolume.oss-ap-southeast-5.aliyuncs.com'
//server localhost : ''
//server https : 'https://api.hooda.id'
//server kubernetes : 'https://kubernetes.hooda.id/'
//server domain : 'https://apispkmpapua.ponxx2021papua.com'
//Base Url API

export default {
	URL_SOCKET: BASE_URL_API,
	URL_API: BASE_URL_API,
	URL_API_ORDER: BASE_URL_ORDER,
	URL_OSS:BASE_URL_OSS_BUCKET_ORDER,
	URL_OSS_ORDER:BASE_URL_OSS_BUCKET_ORDER,
	URL_OSS_CUSTOMER:BASE_URL_OSS_BUCKET_CUSTOMER,
	URL_OSS_DRIVER:BASE_URL_OSS_BUCKET_DRIVER,
	URL_REPO: `${BASE_URL_API}/repo/`,
	URL_REPO_ORDER: `${BASE_URL_ORDER}/repo/`,
	URL_REPO_DRIVER: `${BASE_URL_DRIVER}/repo/`,
	PING_TARGET_API: BASE_URL_API,
};
