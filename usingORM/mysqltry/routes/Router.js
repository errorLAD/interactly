
const contactController = require('../controllers/Controller.js')



const router = require('express').Router()



router.post('/createContact',  contactController.addContact)

router.get('/getContact',  contactController.getAllContacts)



router.get('/getContact/:id',  contactController.getOneContact)

router.put('/updateContact/:id',  contactController.updateContact)

router.delete('/deleteContact/:id',  contactController.deleteContact)

module.exports = router

