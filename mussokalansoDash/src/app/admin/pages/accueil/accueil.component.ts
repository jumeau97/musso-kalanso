import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ChapitreService } from 'src/app/services/chapitre/chapitre.service';
import { ProductService } from 'src/app/services/test/product.service';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

 cat: any;
nbrCat:any;
chap: any;
nbrChap:any;
learn:any;
nbrLearn:any;
mod:any;
nbreMod:any;
  constructor(private categorie: CategoryService, private chapitre: ChapitreService,
    private learner: ProductService, private module: ModuleService) { }

  ngOnInit(): void {
    this.findAllCateg();
    this.findAllChapitre();
    this.findAllLearn();
    this.findAllModule();
  }
  //Nombre de catégorie
  findAllCateg(){
    this.categorie.findAllCateg().subscribe((data:any)=>{
      this.cat = data
      this.nbrCat = this.cat.body.length
    })
  }

  //Nombre de module
  findAllChapitre(){
    this.chapitre.findAllChapitre().subscribe((data:any)=>{
      this.chap = data
      this.nbrChap = this.chap.body.length
    })
  }

  //Nombre de learner
  findAllLearn(){
    this.learner.findAllLearner().subscribe((data:any)=>{
      this.learn = data
      this.nbrLearn = this.learn.body.length
      // console.log("la taille", this.nbrLearn)
    })
  }

  //Nombre de module
  findAllModule(){
    this.module.findAllModule().subscribe((data:any)=>{
      this.mod = data
      this.nbreMod = this.mod.body.length
      console.log("la taille", this.nbreMod)
    })
  }


}
