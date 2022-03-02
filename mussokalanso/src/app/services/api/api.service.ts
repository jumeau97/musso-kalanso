import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  items: any[] = [
    { id: 1, name: 'Gestion de projet', price: 700, category: 'Dévéloppement personnel', img: 'assets/imgs/aloe.png' },
    { id: 2, name: 'Suivi évaluation', price: 500, category: 'Dévéloppement personnel', img: 'assets/imgs/2.png' },
    { id: 3, name: 'Maintenance', price: 700, category: 'Informatique', img: 'assets/imgs/3.png' },
  ];
  constructor() { }



  getItem(id) {
    const item = this.items.find(x => x.id == id);
    return item;
  }

  
}
