const express = require('express');
const router = express.Router();
const Member = require('./models/Members');

const getAll = router.get('/', async (req, res) => {
    const members = await Member.find({});
    res.status(200).json({members});
})

const getOne = router.get('/:id', async (req, res) => {
    let {id} = req.params;
    const member = await Member.findById(id);
    res.status(200).json({member});
})

const addMember = router.post('/', async (req, res) => {
    const data = req.body;

    const newMember = await Member.create({name: data.name, email: data.email});
    await newMember.save();
    res.redirect('/');
})

const deleteMember = router.get('/:id/delete', async (req, res) => {
    let {id} = req.params;
    
    await Member.findByIdAndDelete(id);
    res.redirect('/');
    //res.status(200).json({message: 'Membro excluído!'});
})

module.exports = router;