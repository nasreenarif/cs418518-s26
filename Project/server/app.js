import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import session from "express-session";
import users from './route/user.js';
const app = express();
const port = 3000;


const myLogger = function (req, res, next) {
    console.log('middleware logged');
    next()
}


app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})



//to parse json body
app.use(express.json());
app.use(cookieParser());
app.set("trust proxy", 1);
app.use(
    cors({
        origin: process.env.FE_ORIGIN,
        credentials: true,
        //////////// Optional
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"],
    }),
);

app.use(
    session({
        secret: process.env.SESSION_SECRET || "secretkey",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,   // JS cannot read cookie
            secure: true,    // true in production with HTTPS
            sameSite: "none",
            maxAge: 1000 * 60 * 60, // 1 hour
        },
    })
);


app.use(myLogger);
app.use('/user', users);


app.get('/', (req, res) => {
    res.send('Hello World!');
})


// ALL API

app.all('/test', (req, res) => {
    res.send('Response from all api');
})


// Post API

app.post('/', (req, res) => {
    res.send('Hello World! from post api');
})

export default app;
