const http = require('http')
const server = http.createServer((req, res) => {
    res.write('Hello')
    res.end()
})

const PORT = 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`))