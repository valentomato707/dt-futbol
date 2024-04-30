const express = require('express')
const app = express()
const port = 3000
const serverPath = `http://localhost:${port}`
const players = require('./3-jugador/jugador')

app.get('/', (req, res) => (res.send('Hello, world!')))
app.get('/players', (req, res) => (res.send(players.jugadores())))

app.listen(port, () => (console.log(`Server running on port 3000: ${serverPath}`)))
