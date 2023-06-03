const express = require('express')
const app =  express()
const path = require('path')
const router = require('./routes/Myrouter')
//const router = require('./routes/myRouter')
const PORT = 4000

app.listen(PORT, () => {
    console.log( `API Listening on potr ${PORT}`)
})


app.set('views',path.join(__dirname,'views')) //ตั้งค่า views หรือสร้าง views
app.set('view engine','ejs')//ตั้งค่ารูปแบบเอ็จิ้นเป็น ejs
app.use(express.urlencoded({extended:false})) ////// 4/2/2566
app.use(router)/// เพิ่มเราเตอ
app.use(express.static(path.join(__dirname,'public'))) //index.html จะเป็นหน้าเเรกเสมอ ต้องมี
//app.use(router)

// app.listen(8080,()=>{
//     console.log("server run as port 8080")
// })

app.get('/', (req, res) =>{
    res.send("This is API running ")
})

app.get('/about', (req, res) =>{
    res.send("This is API running2 ")
})



module.exports = app
//ejs 
// npm install ejs