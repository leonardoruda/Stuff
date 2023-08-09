"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delMember = exports.updMember = exports.editPage = exports.addMember = exports.getOne = exports.getAll = void 0;
const Members_1 = __importDefault(require("../models/Members"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let members = yield Members_1.default.find({}).lean();
    res.status(200).render('home', { listExists: true, members });
});
exports.getAll = getAll;
//  /api/:id
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let member = yield Members_1.default.findById(id);
    res.status(200).json({ member });
});
exports.getOne = getOne;
const addMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
    let member = yield Members_1.default.create({ name: data.name, email: data.email });
    member.save();
    res.redirect('/api');
});
exports.addMember = addMember;
//  /api/:id/edit
const editPage = (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    let member = { id, name, email };
    res.render('edit-member', { member });
};
exports.editPage = editPage;
//  /api/:id/update
const updMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let { name, email } = req.body;
    let updData = { name, email };
    yield Members_1.default.findByIdAndUpdate(id, updData);
    res.redirect('/api');
});
exports.updMember = updMember;
//  /api/:id/delete
const delMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let member = yield Members_1.default.findByIdAndDelete(id);
    res.redirect('/api');
});
exports.delMember = delMember;
