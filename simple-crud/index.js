const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const router = require('./api/members');
const Member = require('./api/models/Members');

mongoose.connect('mongodb://127.0.0.1:27017/Members');
const db = mongoose.connection;
db.once('open', () => console.log('Connected to database'));
db.on('error', (err) => console.log(err));

const app = express();

app.engine('handlebars', exphbs.create().engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', async (req, res) => {
    let members = await Member.find({}).lean();
    res.render('home', {
        title: 'Membros & Cia',
        members
    });
})

app.use('/api/members', router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port ' + port));