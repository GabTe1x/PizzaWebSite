const express = require('express');
const session = require('express-session');
const serv = express();
const port = 8080;

serv.set('view engine', 'ejs');
serv.use(express.static('public'));
var bodyParser = require('body-parser');
serv.use(bodyParser.json());
serv.use(bodyParser.urlencoded({ extended: true }));
serv.use(session({
    'secret': '343ji43j4n3jn4jk3n'
}));

const pg = require('pg');
// modifier valeurs selon bdd
/*const pool = new pg.Pool({
    user: 'teixeira',
    host: 'localhost',
    database: 'gaby_will',
    password: "pizza",
    port: 5432
});*/
const pool = new pg.Pool({
    user: 'teixeira',
    host: 'localhost',
    database: 'gaby_will',
    password: "pizza",
    port: 5432
});

var commentaire =
    [
        ["Sam", "Pairturbe", "Les meilleurs pizzas de mon quartier"],
        ["May", "Chavait", "Je suis devenu client fidèle dès la première hehe"],
        ["Gerad", "Menvoussa", "Un service de livraison qui met getir à genoux"],
        ["Willy", "& Gaby", "La qualitée au meilleur prix"],
        ["Jean", "Rapheaul", "MasterClass"],
        ["Sarah", "Molih", "Un site sans égal !"]
    ];

var commande =
    [
        [1, 'Dio', 'ZaWarudo', 'Avenue de France', 'Padovani', 10, true],
        [2, 'Dio', 'ZaWarudo', 'Place des invalides', 'Padovani', 10, true],
        [3, 'Dio', 'ZaWarudo', 'Boulevard Roquefort', 'Padovani', 10, false]
    ];
var produit =
    [
        [["Coca Cola", 2, "33cl", 3],
        ["Margarita", 3, "XL", 9],
        ["Chicken wing", 1, "12", 8]],
        [["Coca Cola", 2, "33cl", 3],
        ["Margarita", 3, "XL", 9],
        ["Chicken wing", 1, "12", 8]],
        [["Coca Cola", 2, "33cl", 3],
        ["Margarita", 3, "XL", 9],
        ["Chicken wing", 1, "12", 8]]
    ]

async function connection(client) {
    let res = await client.connect();
}

//connection(pool);

serv.get('/', function (req, res) {
    res.render("page_accueil", { commentaire: commentaire });
});

serv.get('/selection', function (req, res) {
    if (typeof req.session == 'undefined') {
        req.session.cart = [];
    }
    console.log(req.session.views);
    res.render("page_selection" {produits:produit,commandes:commande} );
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
    res.json({prodid: id_commande});
});

serv.post('/panier-valide',function(req,res){
    let id_commande = req.body.prodid;
    console.log(JSON.stringify(req.body.prodid));
    res.json("prout");
});

serv.listen(port, () => { console.log(`Connexion etablie sur http://localhost:${port}`) });