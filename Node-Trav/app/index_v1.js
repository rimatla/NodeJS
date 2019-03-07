const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // console.log(req.url)

  // Home
  if (req.url === '/') {
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(content)
      }
    )
  }

  // About
  if (req.url === '/about') {
    fs.readFile(
      path.join(__dirname, 'public', 'about.html'),
      (err, content) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(content)
      }
    )
  }

  // JSON
  if (req.url === '/api/users') {
    const users = [
      {name: 'Bob Smith', age: 45},
      {name: 'Vince Jest', age: 22},
    ]
    res.writeHead(200, { 'Content-Type': 'application/json' })
    // turn JS object into JSON
    res.end(JSON.stringify(users))
  }
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

