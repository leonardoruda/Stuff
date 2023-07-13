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
    console.log(member);
})

const addMember = router.post('/', async (req, res) => {
    const data = req.body;

    const newMember = await Member.create({name: data.name, email: data.email});
    await newMember.save();
    res.redirect('/');
})

const deleteMember = router.get('/delete/:id', async (req, res) => {
    let {id} = req.params;
    console.log(id);
    await Member.findByIdAndDelete(id);
    res.sen('/api/members');
    //res.status(200).json({message: 'Membro excluído!'});
})

module.exports = router;