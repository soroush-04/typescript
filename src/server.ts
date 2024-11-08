import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hey');
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});