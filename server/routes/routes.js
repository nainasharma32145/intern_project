const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');
const axios = require('axios');

route.get('/',(req,res)=>{
    res.render('login page');
})
route.get('/table',(req,res)=>{
    res.render('table');
})
route.get('/opt1',(req,res)=>{
     // Make a get request to /api/users
     axios.get('http://localhost:3000/api/users')
     .then(function(response){
         res.render('opt1', { users : response.data });
     })
     .catch(err =>{
         res.send(err);
     })
})

// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route