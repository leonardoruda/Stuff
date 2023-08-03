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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnect = void 0;
const mong = require('mongoose');
require('dotenv').config();
mong.set('strictQuery', true);
const mongoConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Connecting to database...');
        yield mong.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database!');
    }
    catch (error) {
        console.log('Error connecting to database:', error);
    }
});
exports.mongoConnect = mongoConnect;
