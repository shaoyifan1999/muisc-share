module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    devServer: {
        host: 'localhost',
        port: '80',
        proxy: {
            '/api': {
                target: 'http://localhost:8081', // 要请求的地址,这里可以换成自己的后端地址
                changeOrigin: true,
            }
        }
    }
};
