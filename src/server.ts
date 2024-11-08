import express, {Request, Response} from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('hey');
});

interface User {
    name: string;
    age: number;
}

app.post('/user', (req: Request, res: Response) => {
    const user: User = req.body;
    res.status(201).json({ message: 'user created', user });
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});