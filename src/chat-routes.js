const router = require('express').Router()

router.get('/',(req,res)=>{
    res.render('profile',{ user: req.session.user })
})

module.exports = router