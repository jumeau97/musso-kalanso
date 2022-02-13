import { Categorie } from "./Categorie";

export class Module {
    id!: number;
    libelle!: string;
    description!: string;
    etat!: boolean;
    categorie!: Categorie;

}