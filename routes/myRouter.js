//จัดการRouting
const express = require('express')
const router = express.Router()

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

module.exports = router //สร้างเราเตอเพื่อexportออกไปใช้


    



