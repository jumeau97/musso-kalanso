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

  //get subscribe learner
  subscribeLerner(data:any){
    return this.http.post(this.host+"/subscribe", data);
  }

  // get apprenant by module subscribe
  getApprenantByModuleSubs(id, idm){
    return this.http.get(this.host+"/get/subscribe/"+id+"/"+idm);
  }
}
