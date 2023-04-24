# Projet Js Mario kart 2022

Ce projet est une implémentation en 3D pour le web d'un jeu de course de voitures inspiré de Mario Kart.
 
## Parties implémentées :

    - Intégration d'un modèle 3D externe.
    - Implémentation de la génération aléatoire de routes en 3D.
    - Gestion des collisions.
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

## Bibliothèques utilisées 
* [Three.js](https://threejs.org/) : une bibliothèque JavaScript pour créer des animations et des rendus en 3D dans le navigateur
## Images
