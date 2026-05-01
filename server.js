// NodeJS EXPRESS NESTJS
// OYTHON DJANGO FastAPI

const express = require('express')
const app = express()

// Traditional API 
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

// REST API 
app.get('/rest', (req, res) => {
    res.json({name: 'John', age: 20, group: 'MIT'})
})
  
app.listen(port, () => {
  console.log(`Backend server is running on port 3000`)
})
