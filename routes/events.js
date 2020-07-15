const express = require('express')
const router = express.Router()
const Event = require('../models/event')


router.get('/', async(req,res) => {
    try{
           const events = await Event.find()
           res.json(events)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const event = await Event.findById(req.params.id)
           res.json(event)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const event = new Event({
        name: req.body.name,
        place: req.body.place,
        sub: req.body.sub
    })

    try{
        const a1 =  await event.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const event = await Event.findById(req.params.id) 
        event.sub = req.body.sub
        const a1 = await event.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const event = await Event.findById(req.params.id) 
        event.sub = req.body.sub
        const a1 = await event.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router