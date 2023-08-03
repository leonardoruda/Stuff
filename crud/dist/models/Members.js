"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    status: String
});
const members = 'Members';
exports.default = (mongoose_1.connection && mongoose_1.connection.models[members]) ? mongoose_1.connection.models[members] : (0, mongoose_1.model)(members, schema, 'members');
