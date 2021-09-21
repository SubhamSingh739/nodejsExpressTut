const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our hjome page')
    }

    if (req.url === '/about') {
        res.end('Here it our short history')
    }
    // res.write('Welcome to our hjome page')
    res.end(`
    <h1>Oops! </h1>
    <p> we cabt seem to find the page you are looking for</p>
    <a href = "/"> back home
    `)
})

server.listen(5000)