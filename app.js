import express from 'express';
import bodyParser from 'body-parser';

// DEFINE PORT AND APP
const app = express();
const port = 3000;

// USE MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// GET THE HOME ROUTE
app.get('/', (req, res) => {
    res.render('index.ejs', {
        error: null,
    });
});

// GET THE SUBMIT ROUTE
app.post('/submit', (req, res) => {
    res.render('index.ejs', {
        error: null,
    });
});

// LISTEN TO THE PORT:3000
app.listen(port, () => {
    console.log(`Server running on http://localhost:3000`);
})