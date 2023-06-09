# Projet Js Mario kart 2022

Ce projet est une implémentation en 3D pour le web d'un jeu de course de voitures inspiré de Mario Kart.
 
## Bibliothèques utilisées 
* [Three.js](https://threejs.org/) : une bibliothèque JavaScript pour créer des animations et des rendus en 3D dans le navigateur
## Parties implémentées :

- Intégration d'un modèle 3D externe.
- Implémentation de la génération aléatoire de routes en 3D.
- Gestion des collisions. (Je vais essayer de trouver une meilleure méthode, car celle-ci n'est pas parfaite.)
- Gestion de l'accélération et de l'inertie du véhicule.
- Ajout de musique.
## Parties à améliorer 
- Calibration des valeurs pour l'accélération et l'inertie afin d'améliorer la jouabilité.
- Ajout d'un système de game over lorsqu'on tombe de la route.
- Implémentation de portails pour valider les passages à des endroits spécifiques.
 
 ## Comment lancer la page web avec un serveur Python?

Pour lancer la page web, vous devez d'abord vous assurer que Python est installé sur votre ordinateur. Si ce n'est pas le cas, vous pouvez le télécharger et l'installer depuis le site officiel de Python.

Ensuite, ouvrez une invite de commande ou un terminal et accédez au répertoire racine du projet contenant la page web et les fichiers JavaScript. À partir de là, vous pouvez lancer un serveur Python en utilisant la commande suivante :
````
python -m http.server
````

Cela va lancer un serveur HTTP local sur le port 8000 par défaut. Si vous souhaitez utiliser un port différent, vous pouvez spécifier le numéro de port à la fin de la commande, par exemple :
```
python -m http.server 8080
```

Une fois le serveur lancé, vous pouvez accéder à la page web en ouvrant votre navigateur et en saisissant l'adresse suivante dans la barre d'adresse :

```
http://localhost:8000
```
Cela va ouvrir une page web dans le navigateur, et le JavaScript contenu dans les fichiers sera exécuté.

##  Méthode de création aléatoire de routes en 3D
J'ai créé une méthode de génération aléatoire de routes en utilisant la trigonométrie et les courbes de Bézier, qui permet de créer facilement des routes dynamiques à chaque rafraîchissement.
- Imaginer un cercle avec un centre en (0,0) et dessiner plusieurs lignes imaginaires partant du centre avec des angles différents.
- Choisir une taille aléatoire qui part du centre vers le bord du cercle et calculer les coordonnées du point (cosinus, sinus).
- Répéter l'étape 2 pour obtenir la forme extérieure en ajoutant la taille de la route souhaitée.
- Obtenir deux listes de points en 2D à partir des coordonnées des points calculées.
- Utiliser les listes de points pour tracer des courbes de Bézier et obtenir deux shapes.
- Définir une forme pleine avec la shape interne comme hole et l'extérieur comme shape.
- Utiliser l'outil d'extrusion proposé par THREE.js pour passer la forme de 2D à 3D et obtenir la forme finale de la route.
### Exemples 
![route v1](images/route_v1.png)
<img src="images/route3D.png" alt="Description de l'image" style="width: 50%;">

## Images


![video du jeu](https://im5.ezgif.com/tmp/ezgif-5-3c22222550.gif)

# Tester le programme 

J'ai mis le jeu sur itch.io, si vous souhaitez le tester. Veuillez noter que pour le moment, il n'y a pas encore de fonction "Game Over", donc il sera nécessaire de rafraîchir la page pour recommencer. De plus, si vous traversez le sol, veuillez également rafraîchir la page pour générer une nouvelle carte. La musique peut prendre un certain temps pour démarrer et la première collision peut être imprévisible. Je vais essayer de l'améliorer au plus vite.



