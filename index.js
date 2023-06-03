const express = require('express')
const express = express()
const PORT = 4000

app.listen(PORT, () => {
    console.log(`APi Listening on potr ${PORT}`)
})

app.get('/',(req,res)=>{ //หน้าเเรกเป็น ejs
    res.render('index')
})


module.export = app