const app = express()
const fs = require('fs')
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname))


app.listen(PORT, () => {
    console.log('server is now on port ${PORT}')
})
