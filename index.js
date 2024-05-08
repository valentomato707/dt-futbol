const express = require('express')
const app = express()
const port = 3000
const serverPath = `http://localhost:${port}`
const players = require('./3-jugador/jugador')

app.get('/', (req, res) => (res.status(200).send('Hello, world!')))
app.get('/players', (req, res) => (res.status(200).send(players.jugadores())))
app.get('*', (req, res) => (res.status(404).send('Something went wrong. Route not found.')))

app.listen(port, () => (console.log(`Server running on port 3000: ${serverPath}`)))
