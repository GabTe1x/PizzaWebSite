const express = require('express');
const serv= express();

serv.set('view engine', 'ejs')
serv.use(express.static('public'));
var bodyParser = require('body-parser')
serv.use(bodyParser.json());
serv.use(bodyParser.urlencoded({extended: true}));

const { Client } = require('pg');
const client = new Client();
await client.connect();


serv.get('/',function (req,res,next) {
    console.log("Demande la page accueil");
    const res = await client.query('SELECT $1::text as message', ['Hello world!']);
    console.log(res.rows[0].message);
    await client.end();
    res.sendFile("page_acceuil.html",{root:'public'});
});

serv.get('/livraison',function (req,res) {
    console.log("Demande la page Livraison");
});

serv.post('/', function(req, res){

});
  
serv.listen(8080);
