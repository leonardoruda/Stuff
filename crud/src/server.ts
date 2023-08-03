import express, {Request, Response} from 'express';
import { create } from 'express-handlebars';
import { mongoConnect } from './instances/mongo';
import APIRoutes from './routes/router';
const path = require('path');
require('dotenv').config();

const server = express();
mongoConnect();
const hbs = create({
    layoutsDir: './src/views/layouts', defaultLayout: 'index', extname: 'hbs'
});

server.engine('hbs', hbs.engine);
server.set('view engine', 'hbs');
server.set('views', path.join(__dirname, '/views'));

server.use(express.static('public'));
server.use(express.urlencoded({extended: true}));

server.use('/api', APIRoutes);

server.use((req:Request, res:Response) => {
    res.status(404).render('not-found');
})

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})