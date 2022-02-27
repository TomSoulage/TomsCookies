# Tom's Cookies Project

Website developped with Angular (Front) and Firebase (Back).
Designed with Angular Material.

Ce projet est réalisé dans le cadre de la matière Cloud Front à Cy-Tech Pau.
Le site **Tom's Cookie** est une simulation d'une boutique vendant des cookies. 


Avant de lancer le projet, vous devez avoir les configurations/installations suivantes : 
* 1. NodeJS : 16.13.0 
* 2. Angular CLI 13.0.3 ( npm install -g @angular/cli )

Une fois NodeJS et Angular insatallés : 

```
ng serve
```

Ensuite rendez-vous en local : 
http://localhost:4200/accueil

---


Connexion admin : 

* email : admin@gmail.com
Me demander pour le mot de passe

Connexion utilisateur lambda ayant passé plusieurs commandes :

* email : user@gmail.com
* mdp : user123

--- 

Fonctionnalités : 

* *Everybody* :
    * Visiter la boutique Tom's Cookie
    * S'inscrire

* *Admin* :
    * Ajouter / Supprimer / Mettre à jour des cookies
    * Consulter les commandes

* *Utilisateur* :
    * Se connecter
    * Ajouter des cookies à son panier 
    * Valider une commande 
    * Consulter son profil 
    * Consulter l'historique de ses commandes 



---


L'architecture du projet :

* *core* :
    * *models* : fichiers d'interface
    * *services* : services
* *modules* :
    * *admin* : Partie admin
        * *components* :
            * *add-cookie*: Ajout d'un cookie
            * *cookies-management* : Gestion des cookies
            * *update-cookie* : Mise à jour informations d'un cookie
        * *security* : Guard admin
    * *auth* : Partie authentification
        * *components* :
            * *connexion*: Partie connexion
            * *formulaire-user* : Formulaire utilisateur commun Connexion / Inscription
            * *panier* : Gestion panier utilisateur
            * *profil* : Gestion profil utilisateur
        * *security* : Guard auth
* *pages* :
    * *accueil* 
    * *cookies* 
    * *erreur404*
* *shared* :
    * *footer*
    * *header*
* *assets* :
    * *images* :
        * *theme* 
        * *cookies* : photo des cookies de la boutique
    
    

---


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
