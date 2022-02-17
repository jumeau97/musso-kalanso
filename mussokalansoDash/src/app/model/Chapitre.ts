import { Module } from "./Module";

export class Chapitre{
    id!: number;
    libelle!: string;
    video!: string;
    description!: string;
    doc1!: string;
    doc2!: string;
    module!: Module;
}