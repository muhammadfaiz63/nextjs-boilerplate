import OSS from 'ali-oss';

const store = new OSS({
    accessKeyId: 'LTAI4G9dfqYdpQJEif2FFDq2',
    accessKeySecret: 'RZHDJccrihR3DrSmxYJIiLio9sFkTD',
    bucket: 'hoodabucket',
    region:'oss-ap-southeast-5',
});

export default store;