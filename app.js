const express = require('express');
const session = require('express-session');
const serv = express();
const port = 8080;

serv.set('view engine', 'ejs');
serv.use(express.static('public'));
let bodyParser = require('body-parser');
serv.use(bodyParser.json());
serv.use(bodyParser.urlencoded({ extended: true }));
serv.use(session({
    'secret': '343ji43j4n3jn4jk3n',
    resave: true,
    saveUninitialized: true
}));

const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pizzeria',
    password: "001",
    port: 5432
});

async function getPizzas() {
    const res = await pool.query("SELECT * FROM produits WHERE produits.id_produit<11");
    return res.rows;
}
async function getBoissons() {
    const res = await pool.query("SELECT * FROM produits WHERE produits.id_produit<18 AND produits.id_produit>10");
    return res.rows;
}
async function getDesserts() {
    const res = await pool.query("SELECT * FROM produits WHERE produits.id_produit<20 AND produits.id_produit>17");
    return res.rows;
}
async function getEntrees() {
    const res = await pool.query("SELECT * FROM produits WHERE produits.id_produit>19");
    return res.rows;
}

serv.get('/', function (req, res) {
    let commentaire = [["salut"]];
    res.render("page_accueil", { commentaire: commentaire });
});

serv.get('/selection', async function (req, res) {
    if (typeof req.session == 'undefined') {
        req.session.cart = [];
    }
    const res_boissons = await pool.query("SELECT * FROM produits WHERE produits.id_produit<18 AND produits.id_produit>10");
    const res_entrees = pool.query("SELECT * FROM produits WHERE produits.id_produit<20 AND produits.id_produit>17");
    const res_deserts = await pool.query("SELECT * FROM produits WHERE produits.id_produit<20 AND produits.id_produit>17");
    const res_pizzas = await pool.query("SELECT * FROM produits WHERE produits.id_produit<11");
    
    res.render("page_selection.ejs", {
        pizzas: res_pizzas.rows,
        boissons: getBoissons(),
        deserts: getDesserts(),
        entree: getEntrees(),
     });
});

serv.get('/custompizza',function (req,res,next) {
    res.render("page_custom");
});


serv.get('/livraison',function (req,res) {
    console.log("Demande la page Livraison");
    res.render("page_livraison.ejs", { produits: produit, commandes: commande });
});

serv.post('/validationLivraison', function (req, res) {
    let id_commande = req.body.commandeid
    commande[id_commande][6]=true;
    res.render("page_livraison.ejs", {produits:produit,commandes:commande})
});

serv.post('/demande-product',function(req,res){
    let id_commande = req.body.prodid;
    console.log(JSON.stringify(req.body.prodid));
    res.json(commande[id_commande][0]);
});

serv.listen(port, () => { console.log(`Connexion etablie sur http://localhost:${port}`) });