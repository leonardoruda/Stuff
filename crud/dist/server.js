"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const mongo_1 = require("./instances/mongo");
const router_1 = __importDefault(require("./routes/router"));
const path = require('path');
require('dotenv').config();
const server = (0, express_1.default)();
(0, mongo_1.mongoConnect)();
const hbs = (0, express_handlebars_1.create)({
    layoutsDir: './src/views/layouts', defaultLayout: 'index', extname: 'hbs'
});
server.engine('hbs', hbs.engine);
server.set('view engine', 'hbs');
server.set('views', path.join(__dirname, '/views'));
server.use(express_1.default.static('public'));
server.use(express_1.default.urlencoded({ extended: true }));
server.use('/api', router_1.default);
server.use((req, res) => {
    res.status(404).render('not-found');
});
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
