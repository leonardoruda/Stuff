import express from "express";
import { create } from "express-handlebars";
import { fakeApi } from "./fakeApi.js";

const app = express();
const hbs = create({
    layoutsDir: './views/layouts', defaultLayout: 'planB', extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
})

app.listen(5000, () => console.log('Running'));

// If __dirname use is required, one must follow some steps to create a custom one, as it is not defined in ES module scope.
// First, in whatever utils.js file, you will be exporting this function for global usage:

//import path from 'path';
//import { fileURLToPath } from 'url';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

//export {__filename, __dirname };

// vide https://codingbeautydev.com/blog/javascript-dirname-is-not-defined-in-es-module-scope/