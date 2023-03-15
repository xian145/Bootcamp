import express from "express"
const app = express()

app.get('/', (req,res) => {
    const page = `
        <html>
            <body>
                <h1>Enter a new person:</h1>
                <form action="/person" method="POST">
                    <input type="text" name="name" />
                    <input type="submit">
                </form>
            </body>
        </html>
        ` //this will be the page when someone enter to "/"
    res.send(page) //here we tell to responde with the page
})

app.listen(3000, () => console.log('Server ready')) //upload our server in localhost:3000