export interface IPanier {
    id: string;
    listeIdCookies : Array<string>;
    listeNbCookies: Array<number>;
    listePrixTotalParCookie: Array<number>;
    prixTotal: number;
}