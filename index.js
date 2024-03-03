import express from 'express';
import Prometheus from 'express-prom-bundle';
import cors from 'cors';
const app = express();
const port = 3000;

const metricsMiddleware = Prometheus({
    metricsPath: '/metrics', // Endpoint to expose metrics
});

app.use(metricsMiddleware);

app.use(cors());

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

app.get('/collapse/:iteration', (req, res) => {
    console.log('/collapse');
    const { iteration } = req.params;
    for (let i = 0; i < iteration; i++) {}
    res.json({
        result: 'Collapse',
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log('App is running');
})
