const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/user');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");

const PORT = 3000;

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    userModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("user does not exist")
        }
    })
})


app.post('/register', (req, res) => {
    // userModel.create(req.body)
    // .then(userRegister => res.json(userRegister))
    // .catch(err => res.json(err))
    
    const userdata = req.body;
    userModel.findOne({email: userdata.email})
    .then(user => {
        if(user){
            res.json("user already exists")
        }else{
            userModel.create(userdata);
            res.json(user)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
