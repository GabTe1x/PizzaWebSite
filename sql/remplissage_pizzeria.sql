INSERT INTO produits (nom_produit,url_image,prix)
VALUES
    ('4 Fromages','images/pizza_selection/4fromages.jpg',9),
    ('Marguerita','images/pizza_selection/marguerita.jpg',7),
    ('Chèvre miel','images/pizza_selection/chevremiel.jpg',9),
    ('Végétarienne','images/pizza_selection/vegetarienne.jpg',11),
    ('Hawaienne','images/pizza_selection/hawaienne.jpg',7),
    ('Kebab','images/pizza_selection/kebab.jpg',9),
    ('Raclette','images/pizza_selection/raclette.jpg',10),
    ('Suprême','images/pizza_selection/supreme.jpg',10),
    ('Texane BBQ','images/pizza_selection/texanebbq.jpg',11),
    ('Steak BBQ','images/pizza_selection/bbq.jpg',10),
    ('Coca 33cl','images/boissons_selection/coca33.jpg',3),
    ('Coca 1.25L','images/boissons_selection/coca125.jpg',5),
    ('FuzeTea 33cl','images/boissons_selection/fuzetea33.jpg',3),
    ('FuzeTea 1.25L','images/boissons_selection/fuzetea125.jpg',5),
    ('Heineken 33cl','images/boissons_selection/heineken33.jpg',3),
    ('Oasis 33cl','images/boissons_selection/oasis33.jpg',3),
    ('Oasis 2L','images/boissons_selection/oasis200.jpg',6),
    ('Fondant au chocolat','images/dessert_selection/fondant.jpg',4),
    ('Pain au nutella','images/dessert_selection/nutella.jpg',3),
    ('Hotwings x6','images/entree_selection/hotwings.jpg',5),
    ('Hotwings x9','images/entree_selection/hotwings.jpg',6),
    ('Mozzastick x7','images/entree_selection/mozzastick.jpg',5),
    ('Mozzastick x14','images/entree_selection/mozzastick.jpg',7),
    ('Nuggets x6','images/entree_selection/nuggets.jpg',4),
    ('Nuggets x9','images/entree_selection/nuggets.jpg',6),
    ('Nuggets x20','images/entree_selection/nuggets.jpg',10),
    ('Tenders x6','images/entree_selection/tenders.jpg',7),
    ('Tenders x11','images/entree_selection/tenders.jpg',11);

INSERT INTO taille_produit (taille)
VALUES (1),(2),(3);

INSERT INTO menu (nom_menu,prix)
VALUES 
    ('Menu Etudiant',8),
    ('Menu duo',15),
    ('Mega Party',35);

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