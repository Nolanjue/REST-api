import express from 'express'

import {getPayment, sendPayment, foundPayment, deletePayment, updatePayment } from '../controllers/inputs.js'


const router = express.Router();


router.get('/obtain',getPayment)
//router calls a function, may need to specify another url in a very rare case the call is the same.

router.post('/send', sendPayment)





router.get('/found/:id', foundPayment)

router.delete('/delete/:id', deletePayment)

router.patch('/update/:id', updatePayment)

export default router;
