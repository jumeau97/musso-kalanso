import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

host=environment.host;

  constructor(private http:HttpClient) { }

  saveCategory(data:any){
    return this.http.post(this.host+"save/category", data);
  }

  //list all category
  findAllCateg(){
    return this.http.get(this.host+"allCategory");
  }

  //publish category
  toPublish(id:any){
    return this.http.get(this.host+"category/publish/"+id);
  }
  //unpublish category
  ToUnpublish(id:any){
    return this.http.get(this.host+"category/unpublish/"+id);
  }
}
