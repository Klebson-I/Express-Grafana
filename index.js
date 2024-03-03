import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('/')
    res.json({
        result: 'OK',
    });
});

app.get('/log', (req, res) => {
    console.log('/log');
    console.log('Logging...');
    res.json({
        result: 'Success',
    });
});

app.get('/collapse', (req, res) => {
    console.log('/collapse');
    for (let i = 0; i < 1000000000000; i++) {}
    res.json({
        result: 'Collapse',
    });
});

app.listen(port, () => {
    console.log('App is running');
})
