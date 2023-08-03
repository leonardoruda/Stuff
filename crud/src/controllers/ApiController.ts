import {Request, Response} from 'express';
import Member from '../models/Members';

export const getAll = async (req:Request, res:Response) => {
    let members = await Member.find({}).lean();
    
    res.status(200).render('home', {listExists: true, members});
};

//  /api/:id
export const getOne = async (req:Request, res:Response) => {
    let {id} = req.params;

    let member = await Member.findById(id);
    res.status(200).json({member});
};

export const addMember = async (req:Request, res:Response) => {
    let data = req.body;
    
    let member = await Member.create({name: data.name, email: data.email});
    member.save();
    res.redirect('/api');
};



//  /api/:id/delete
export const delMember = async (req:Request, res:Response) => {
    let id = req.params.id;

    let member = await Member.findByIdAndDelete(id);

    res.redirect('/api');
}