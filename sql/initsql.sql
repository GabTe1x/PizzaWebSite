DROP TABLE IF EXISTS commandes CASCADE;
DROP TABLE IF EXISTS commandes_listes CASCADE;

DROP TABLE IF EXISTS produits CASCADE;
DROP TABLE IF EXISTS taille_produit CASCADE;

DROP TABLE IF EXISTS menu CASCADE;
DROP TABLE IF EXISTS menu_produit CASCADE;

DROP TABLE IF EXISTS pizza_custom CASCADE;
DROP TABLE IF EXISTS ingredient CASCADE;
DROP TABLE IF EXISTS composition CASCADE;

DROP TABLE IF EXISTS commentaires CASCADE;

/* PRODUIT DE BASE */

CREATE TABLE IF NOT EXISTS produits (
  id_produit SERIAL PRIMARY KEY,
  nom_produit varchar(255) NOT NULL,
  produit_description varchar(255) NOT NULL,
  url_image varchar(255) NOT NULL,
  prix integer NOT NULL
);

CREATE TABLE IF NOT EXISTS taille_produit (
	id_taille_produit SERIAL PRIMARY KEY,
	taille integer NOT NULL CHECK (taille > 0 AND taille < 4)
);
/* COMMANDE */
CREATE TABLE IF NOT EXISTS commandes (
	id_command SERIAL PRIMARY KEY,
	nom_user varchar(255) NOT NULL,
	adresse_livraison varchar(255) NOT NULL,
	complementaire varchar(255) NOT NULL,
	livraison boolean NOT NULL
);

CREATE TABLE IF NOT EXISTS commandes_listes (
	id_commande_list integer,
  types_produit integer NOT NULL CHECK (types_produit > 0 AND types_produit < 4), /* 1=STANDART, 2=MENU, 3= PIZZA CUSTOM */
	id_produits integer NOT NULL,
  id_taille_produit integer,
  FOREIGN KEY (id_taille_produit) REFERENCES taille_produit (id_taille_produit),
  FOREIGN KEY (id_commande_list) REFERENCES commandes (id_command)
);


CREATE TABLE IF NOT EXISTS commandes (
	id_command SERIAL PRIMARY KEY,
	nom_user varchar(255) NOT NULL,
	adresse_livraison varchar(255) NOT NULL,
	complementaire varchar(255) NOT NULL,
	livraison boolean NOT NULL
);

CREATE TABLE IF NOT EXISTS commandes_listes (
	id_commande_list integer,
  types_produit integer NOT NULL CHECK (types_produit > 0 AND types_produit < 4), /* 1=STANDART, 2=MENU, 3= PIZZA CUSTOM */
	id_produits integer NOT NULL,
  id_taille_produit integer,
  FOREIGN KEY (id_taille_produit) REFERENCES taille_produit (id_taille_produit),
  FOREIGN KEY (id_commande_list) REFERENCES commandes (id_comman)
);

/* MENU */
CREATE TABLE IF NOT EXISTS menu (
  id_menu SERIAL PRIMARY KEY,
  nom_menu varchar(255) NOT NULL,
  url_image varchar(255) NOT NULL,
  prix integer NOT NULL
);

CREATE TABLE IF NOT EXISTS menu_produit (
  id_menu_produit SERIAL PRIMARY KEY,
  id_menu integer NOT NULL,
  id_produit integer NOT NULL,
  FOREIGN KEY (id_produit) REFERENCES produits (id_produit),
  FOREIGN KEY (id_menu) REFERENCES menu (id_menu)

);
/* MENU */

/* PIZZA CUSTOM */

CREATE TABLE IF NOT EXISTS pizza_custom (
  id_pizzacustom SERIAL PRIMARY KEY,
  nom_produit varchar(255) NOT NULL,
  prix integer NOT NULL
);

CREATE TABLE IF NOT EXISTS ingredient (
  id_ingredient SERIAL PRIMARY KEY,
  nom_ingredient varchar(255) NOT NULL,
  prix varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS composition (
  id_composition SERIAL PRIMARY KEY,
	id_pizzacustom integer NOT NULL,
  id_ingredient integer NOT NULL,
  FOREIGN KEY (id_ingredient) REFERENCES ingredient (id_ingredient),
  FOREIGN KEY (id_pizzacustom) REFERENCES pizza_custom (id_pizzacustom)
);

/* PIZZA CUSTOM */


/* COMMENTAIRES */
CREATE TABLE IF NOT EXISTS commentaires (
  nom varchar(255) NOT NULL,
  prenom varchar(255) NOT NULL,
  commentaire varchar(255) NOT NULL
);
