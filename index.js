const express = require('express')
const app = express()
const path = require('path')

//app.get('/api/users',(req,res){});

app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env .PORT || 5000;

app.listen(PORT, () => {
console.log(`APi Listening on potr ${PORT}`)
})

app.get('/' ,(req, res)=>{
    res.render('index.html')
})

module.export = app