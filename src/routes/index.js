const {Router} = require('express');
const router = Router();

const webpush =  require('../webpush.js')

let pushSubscription;

router.post('/subscription', async (req,res)=>{
    pushSubscription = req.body
    res.status(200).json()

})

router.post('/new-message', async (req,res)=>{
   
    const {message} = req.body 
    const payload = JSON.stringify({
        title:'my notification',
        message:message
    })
     try {
        await  webpush.sendNotification(pushSubscription, payload)
     }catch(e){
         console.log(e)
     }
})


module.exports = router