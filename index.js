const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({extends: false}))
app.use(express.static(path.join(__dirname, "public")))

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.post('/api/v1/quiz', function(req, res){
    const answer = req.body.answer
    if(answer === "2"){
        res.redirect("/correct.html")
    } else {
        res.redirect("/wrong.html")
    }
})

// app.get('/about', function (req, res) {
//   res.send('Hello World')
// })

app.listen(3000)