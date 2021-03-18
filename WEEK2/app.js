'use strict';
const express = require('express');
const cors = require('cors');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const passport = require('./utils/pass');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());// for parsing application/json
app.use(express.urlencoded({extended: true}));// for parsing application/x-www-form-urlencoded
app.use(express.static('week2_public_html'));

app.use('/cat', passport.authenticate('jwt', {session: false}),catRoute);// protected route
app.use('/user', passport.authenticate('jwt', {session: false}),userRoute);// protected route
app.use('/auth', authRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
