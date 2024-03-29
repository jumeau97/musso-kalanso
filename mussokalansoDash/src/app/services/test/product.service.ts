import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  host=environment.host;

  productNames: string[] = [
    "Bamboo Watch", 
    "Black Watch", 
    "Blue Band", 
    "Blue T-Shirt", 
    "Bracelet", 
    "Brown Purse", 
    "Chakra Bracelet",
    "Galaxy Earrings",
    "Game Controller",
    "Gaming Set",
    "Gold Phone Case",
    "Green Earbuds",
    "Green T-Shirt",
    "Grey T-Shirt",
    "Headphones",
    "Light Green T-Shirt",
    "Lime Band",
    "Mini Speakers",
    "Painted Phone Case",
    "Pink Band",
    "Pink Purse",
    "Purple Band",
    "Purple Gemstone Necklace",
    "Purple T-Shirt",
    "Shoes",
    "Sneakers",
    "Teal T-Shirt",
    "Yellow Earbuds",
    "Yoga Mat",
    "Yoga Set",
];
  constructor(private http : HttpClient) { }

  getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return data; });
}


 //list module by category
 findAllModuleByCateg(data:any){
  return this.http.post(this.host+"categorie/modules", data);
}

//list module by categorie with etat true or false
findAllModuleByCategC(data:any){
  return this.http.post(this.host+"categorie/all/module", data);
}

// find all learner
findAllLearner(){
  return this.http.get(this.host+"learn/all/learner");
}

// find all users
findAllUser(){
  return this.http.get(this.host+"utilisateurs");
}

}
