const express = require('express')

const app = express()

const PORT = 4040

app.use(express.json())

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))