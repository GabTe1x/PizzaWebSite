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
    user: 'teixeira',
    host: 'localhost',
    database: 'gaby_will',
    password: "pizza",
    port: 5432
});


serv.get('/', function (req, res) {
    let commentaire = [["salut"]];
    res.render("page_accueil", { commentaire: commentaire });
});

serv.get('/selection', async function (req, res) {
    if (typeof req.session == 'undefined') {
        req.session.cart = [];
    }
    const res_boissons = await pool.query("SELECT * FROM produits WHERE produits.id_produit<18 AND produits.id_produit>10");
    const res_entrees = await pool.query("SELECT * FROM produits WHERE produits.id_produit>19");
    const res_deserts = await pool.query("SELECT * FROM produits WHERE produits.id_produit<20 AND produits.id_produit>17");
    const res_pizzas = await pool.query("SELECT * FROM produits WHERE produits.id_produit<11");
    const res_menu = await pool.query("SELECT * FROM menu");
    let menuu=res_menu.rows;
    let items=[];
    for(var i =0;i<menuu.length;i++){
        var items_menu=await pool.query("SELECT nom_produit FROM produits NATURAL JOIN menu_produit WHERE id_menu ="+menuu[i]["id_menu"]+" AND menu_produit.id_produit=produits.id_produit;");
        items.push(items_menu.rows);
    }
    res.render("page_selection.ejs", {
        pizzas: res_pizzas.rows,
        boissons: res_boissons.rows,
        deserts: res_deserts.rows,
<<<<<<< Updated upstream
        entrees: res_entrees.rows
     });
=======
        entrees: res_entrees.rows,
        menus: res_menu.rows,
        menu_items : items
    });
>>>>>>> Stashed changes
});

serv.get('/custompizza',function (req,res,next) {
    res.render("page_custom");
});

<<<<<<< Updated upstream

serv.get('/livraison',function (req,res) {
    console.log("Demande la page Livraison");
    res.render("page_livraison.ejs", { produits: produit, commandes: commande });
=======
serv.get('/livraison', async function (req, res) {
    const commandes_sql = await pool.query("SELECT * FROM commandes");
    let retn = commandes_sql.rows;
    let produit = [];
    for (var i = 0; i < retn.length; i++) {
        let s1 = "select nom_produit,prix from produits  natural join commandes_listes WHERE " + retn[i]["id_command"] + "=id_commande_list AND produits.id_produit=commandes_listes.id_produits AND commandes_listes.types_produit=1;"
        let s2 = "select nom_menu AS nom_produit,prix from menu natural join commandes_listes WHERE " + retn[i]["id_command"] + "=id_commande_list AND menu.id_menu=commandes_listes.id_produits AND commandes_listes.types_produit=2;"
        let s3 = "select nom_produit,prix from produits  natural join commandes_listes WHERE " + retn[i]["id_command"] + "=id_commande_list AND produits.id_produit=commandes_listes.id_produits AND commandes_listes.type_produit=3;"
        let f = await pool.query(s1);
        let x = await pool.query(s2);
        resultat = f.rows.concat(x.rows);
        produit.push(resultat);
    }
    res.render("page_livraison.ejs", {
        commandes: retn
        , produits: produit
    });
>>>>>>> Stashed changes
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