const express = require('express');
const router = express.Router()

const User = require('../models/user.model')

const user_mail = require("../utils/user-mail")
const admin_mail = require("../utils/admin-mail")

const admin_mail_id ="admin-1@a.com, admin-2@a.com, admin-3@a.com, admin-4@a.com, admin-5@a.com"

router.post('/', async (req, res) => {
    
    try {
      const user = await User.create(req.body)
      console.log(req.body)
      
      user_mail("karik@gmail.com", user.email,`Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,` Hi ${req.body.first_name}, Please confirm your email address`,`<h1>Hi ${req.body.first_name}, Please confirm your email address</h1`)
     
     admin_mail("kartik@gmail.com" ,
                 admin_mail_id ,
                `${req.body.first_name} ${req.body.last_name} has registered with us`,
                `Please welcome ${req.body.first_name} ${req.body.last_name}`,
                `<h1>Please welcome ${req.body.first_name} ${req.body.last_name}</h1>`,
                )
     
      res.send(user)
    } catch (e) {
        console.log(e.message)
      res.status(500).json({ message: e.message })
    }
  })
  
  router.get('/', async (req, res) => {
    try {
    /*Pagination 
    req.query.page is in string form so i have to change string into number
    */
    const page = +req.query.page || 1
    const size = +req.query.size || 3
    
    const skip = (page-1)*size
    
      const user = await User.find().skip(skip).limit(size).lean().exec()
      const users = await User.find().lean().exec()
      const pages = Math.ceil(users.length/size)
      res.json({user,pages})
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  })

  module.exports = router
