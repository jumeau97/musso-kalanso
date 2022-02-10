import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
host=environment.host;
  constructor(private http:HttpClient) { }

  //find last four module
  getLastFourModule(){
    return this.http.get(this.host+"/fourModule");
  }

  //find all category
  getAllCategory(){
    return this.http.get(this.host+"/allCategory");
  }

  // get details module by his id
  getDetailsModuleById(id:any){
   return this.http.get(this.host+"/module/"+id);
  }
}
