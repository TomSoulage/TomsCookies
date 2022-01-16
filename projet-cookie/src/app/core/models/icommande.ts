export interface ICommande {
    id?: string;
    idUtilisateur?: string;
    date?: string;
    listeIdCookies : Array<string>;
    listeNbCookies: Array<number>;
    listePrixTotalParCookie: Array<number>;
    prixTotal: number;
}