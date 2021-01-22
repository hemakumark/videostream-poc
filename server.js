const express = require('express')
const path = require('path')
const basicAuth = require('express-basic-auth')
const PORT = process.env.PORT || 5000

var app = module.exports = express();

var staticUserAuth = basicAuth({
    users: {
        'alcs': 'Alcs@123'
    },
    challenge: true
})

app.use(express.static(path.join(__dirname, 'node_modules')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


app.get('/', function(req, res){
    res.redirect('/player');
});

app.get('/player', staticUserAuth, (req, res) => res.render('index'))
  