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

// router.get('/', (req, res) =>{
//     res.render('index')
// })

// router.get('/about', (req, res) =>{
//     res.send("This is API running2 ")
// })

router.get('/',(req,res)=>{ //หน้าเเรกเป็น ejs
    res.render('index')
})
//const path = require('path')
router.get('/cal',(req,res)=>{
    res.render('cal')
})

router.get('/taxi_limou',(req,res)=>{
    res.render('taxi_limou')
})

router.get('/taxi',(req,res)=>{
    res.render('taxi')
})

router.get('/taxi_information',(req,res)=>{
    res.render('taxi_information')
})

router.get('/limuresult',(req,res)=>{
    res.render('limuresult')
})

router.get('/limousine_information',(req,res)=>{
    res.render('limousine_information')
})

module.exports = app
