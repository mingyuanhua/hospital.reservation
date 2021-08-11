const http = require('http');
const server = http.createServer();
server.listen(3000, () => {
    console.log('Server is running...')
});
server.on('request', (req,res) => {
    res.end('Hello Nodejs');
});