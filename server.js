import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const router = express.Router();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`---> server.directory-name: ${__dirname}`);
app.use(express.static(__dirname + '/public'));

router.get('/', function (req, res) {
    console.log(`---> router.get /`);
    res.sendFile('/index.html'); // res.sendFile(path.join(__dirname + '//index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/about', function (req, res) {
    console.log(`---> router.get /about`);
    res.sendFile('/about.html');
});

router.get('/sitemap', function (req, res) {
    console.log(`---> router.get /sitemap`);
    res.sendFile('/sitemap.html');
});

//add the router
app.use('/', router);
app.use('/src', express.static('src'));
app.use('/css', express.static('css'));
app.use('/media', express.static('media'));

app.listen(3000, function () {
    console.log('Servidor web escuchando en el http://localhost:3000/ puerto 3000');
});