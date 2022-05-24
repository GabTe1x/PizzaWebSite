INSERT INTO produits (nom_produit,produit_description,url_image,prix)
VALUES
    ('4 Fromages','Sauce tomate à l origan ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d Ambert AOP.','images/pizza_selection/4fromages.jpg',9),
    ('Marguerita','Sauce tomate à l origan et mozzarella.','images/pizza_selection/marguerita.jpg',7),
    ('Chèvre miel','Crème fraîche légère, mozzarella, fromage de chèvre, miel.','images/pizza_selection/chevremiel.jpg',9),
    ('Végétarienne','Sauce tomate à l origan, mozzarella, champignons frais, oignons rouges frais, poivrons verts frais, tomates fraîches et Olives noires.','images/pizza_selection/vegetarienne.jpg',11),
    ('Hawaienne','Sauce tomate à l origan, mozzarella, jambon et ananas.','images/pizza_selection/hawaienne.jpg',7),
    ('Kebab','Sauce tomate à l origan, mozzarella, émincé de poulet kebab, tomates fraîches, oignons rouges frais et sauce blanche kebab.','images/pizza_selection/kebab.jpg',9),
    ('Raclette','Crème fraîche légère, mozzarella, pommes de terre, lardons et fromage à raclette.','images/pizza_selection/raclette.jpg',10),
    ('Suprême','Sauce tomate à l origan, mozzarella, emietté au boeuf, saucisse pepperoni, champignons frais, oignons rouges frais et poivrons verts frais.','images/pizza_selection/supreme.jpg',10),
    ('Texane BBQ','Sauce barbecue, mozzarella, jambon, emietté au boeuf, lardons, champignons frais et oignons rouges frais.','images/pizza_selection/texanebbq.jpg',11),
    ('Steak BBQ','Sauce barbecue, mozzarella, filet de poulet rôti, oignons rouges frais, champignons frais et poivrons verts frais.','images/pizza_selection/bbq.jpg',10),
    ('Coca 33cl','Coca-Cola Original 33cl','images/boissons_selection/coca33.jpg',3),
    ('Coca 1.25L','Coca-Cola Original 1,25L','images/boissons_selection/coca125.jpg',5),
    ('FuzeTea 33cl','Fuze Tea 33cl','images/boissons_selection/fuzetea33.jpg',3),
    ('FuzeTea 1.25L','Fuze Tea 1,25L','images/boissons_selection/fuzetea125.jpg',5),
    ('Heineken 33cl','Interdit -18 ans','images/boissons_selection/heineken33.jpg',3),
    ('Oasis 33cl','Oasis 33cl','images/boissons_selection/oasis33.jpg',3),
    ('Oasis 2L','Oasis 2L','images/boissons_selection/oasis200.jpg',6),
    ('Fondant au chocolat','Coeur Fondant au chocolat','images/dessert_selection/fondant.jpg',4),
    ('Pain au nutella','8 Bâtonnets de pâte à pizza garnis de véritable Nutella ®.','images/dessert_selection/nutella.jpg',3),
    ('Hotwings x6','Recette très épicée : 6 ailes de poulet marinées.','images/entree_selection/hotwings.jpg',5),
    ('Hotwings x9','Recette très épicée : 9 ailes de poulet marinées.','images/entree_selection/hotwings.jpg',6),
    ('Mozzastick x7','7 Bâtonnets de pâte à pizza garnis de mozzarella.','images/entree_selection/mozzastick.jpg',5),
    ('Mozzastick x14','14 Bâtonnets de pâte à pizza garnis de mozzarella.','images/entree_selection/mozzastick.jpg',7),
    ('Nuggets x6','6 Bouchées Panées au Poulet.','images/entree_selection/nuggets.jpg',4),
    ('Nuggets x9','9 Bouchées Panées au Poulet.','images/entree_selection/nuggets.jpg',6),
    ('Nuggets x20','20 Bouchées Panées au Poulet.','images/entree_selection/nuggets.jpg',10),
    ('Tenders x6','6 Filets de Poulet panés.','images/entree_selection/tenders.jpg',7),
    ('Tenders x11','11 Filets de Poulet panés.','images/entree_selection/tenders.jpg',11);

INSERT INTO taille_produit (taille)
VALUES (1),(2),(3);

INSERT INTO menu (nom_menu,url_image,prix)
VALUES 
    ('Menu Etudiant','images/menuduo.jpg',8),
    ('Menu duo','images/menuduo.jpg',15),
    ('Mega Party','images/menu_party.jpg',35);

INSERT INTO menu_produit (id_menu,id_produit)
VALUES 
    (1,13),
    (1,2),
    (2,5),
    (2,24),
    (2,14),
    (3,17),
    (3,26),
    (3,8),
    (3,1),
    (3,7);