const http = require('http');
const todos = [
    {
        id: 1,
        name: 'todo 1',
    },
    {
        id: 2,
        name: 'todo 2',
    },
];
const server = http.createServer((req, res) => {
    console.log('authorization', req.headers.authorization);
    let body = [];
    let response = {
        success: false,
        data: null,
    };
    let statusCode = 404;
    const header = {
        'Content-Type': 'application/json',
    };

    res.writeHead(statusCode, header);
    req.on('data', (data) => {
        body.push(data);
    }).on('end', () => {
        const str = Buffer.concat(body).toString();
        console.log('req.method', req.method);
        console.log('req.url', req.url);
        if (req.method === 'GET' && req.url === '/todos') {
            statusCode = 200;
            response.success = true;
            response.data = todos;
        }
        res.writeHead(statusCode, header);
        res.end(JSON.stringify(response));
    });
});

const PORT = 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
