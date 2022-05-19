const express = require('express');
const serv= express();
const port = 8080;

serv.set('view engine', 'ejs');
serv.use(express.static('public'));
var bodyParser = require('body-parser')
serv.use(bodyParser.json());
serv.use(bodyParser.urlencoded({extended: true}));

const pg = require('pg');

const pool = new pg.Pool({
    user: 'root_pizzeria',
    host: 'localhost',
    database: 'bdd_pizzeria',
    password: "pizza001",
    port: 5432
});

/* 
postgres=# CREATE USER root_pizzeria WITH PASSWORD 'pizza001';
postgres=# CREATE DATABASE bdd_pizzeria OWNER root_pizzeria;
*/

async function connection(client) {
    let res = await client.connect();
    console.log(res);
}

connection(pool);

serv.get("/api/pizza", async (req, res)=>{
    const retn = {
        pizzas: [
            {
                nom: "Marguerita",
                prix: 29.90,
                url: "https://picsum.photos/200"
            },
            {
                nom: "Kabyle",
                prix: 59.90,
                url: "https://picsum.photos/200"
            }
        ]};
    res.json(retn);
});

serv.get('/',function (req,res,next) {
    res.render("page_acceuil");
});

serv.get('/livraison',function (req,res) {

    console.log("Demande la page Livraison");
  //  res.render("page_livraison.ejs", {commande:});
});

serv.post('/', function(req, res){

});
  
serv.listen(port, () => {console.log(`Connexion etablie sur http://localhost:${port}`)});
