const express= require('express')
const Contact = require('../Models/Contact')

const ContactRouter=express.Router()

ContactRouter.post('/addContact',async(req,res)=>{

    try {
        const found = await Contact.findOne({email : req.body.email})

        if (found) {
           return  res.status(400).send('Email already used')
        }
        

        const newContact = new Contact (req.body)

        
        await newContact.save()


        res.status(200).send({Msg : "Contact Added ", newContact})

     } catch (error) {


        res.status(500).send('Could not add Contact')

        
    }

})


ContactRouter.get('/getContacts', async(req, res)=>{

    try{
       const contacts = await Contact.find()

       res.status(200).send({Msg : "List Contacts"})
    } 
    catch (error){
        res.statuts(500).send('Could Not get Contacts')
    }
})






module.exports= ContactRouter