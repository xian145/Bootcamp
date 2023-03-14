import express from 'express'

const app = express() //bring express to create a server

app.get('/', (req, res) => res.send('Hello World!')) //search in `/` in server and send `hello world` so we can view this the web

app.listen(3000, () => console.log('Server ready')) //the serves is hosted in port 3000 and in cosole send the `server ready` when everything is allright

//ctrl + c close the server