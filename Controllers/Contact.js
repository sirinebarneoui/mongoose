const Contact = require("../Models/Contact")

exports.AddContact=async(req,res)=>{
    try {

        const found = await Contact.findOne({email : req.body.email})

        if(found){
            return res.status(400).send('Email already used')
        }

        const newContact = new Contact(req.body)

        await newContact.save()

        res.status(200).send({Msg : "Contact Added",newContact})
    } catch (error) {
        res.status(500).send('Could not add Contact')
    }
}

exports.GetContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({Msg : "Contact List",contacts})
    } catch (error) {
        res.status(500).send('Could not get Contacts')
    }
}

exports.DeleteContact=async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndDelete(id)

        res.status(200).send('Contact deleted')
    } catch (error) {
        res.status(500).send('Could not delete Contacts')
    }
}

exports.UpdateContact=async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('Contact updated')
    } catch (error) {
        res.status(500).send('Could not update Contacts')
    }
}

exports.GetOneContact=async(req,res)=>{
    try {
        const {id} = req.params

        const contactF = await Contact.findById(id)

        res.status(200).send({Msg :"Contact found", contactF})
    } catch (error) {
        res.status(500).send('Could not get Contact')
    }
}