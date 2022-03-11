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

  //find all category published
  getAllCategory(){
    return this.http.get(this.host+"/allCategory/published");
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

  //modules by category
  getModuleByCategory(data:any){
    return this.http.post(this.host+"/categorie/modules", data);
  }

  // get module by id 
  getDetailsCategory(id:any){
    return this.http.get(this.host+"/module/"+id);
  }

  //all module published
  allModulePublished(){
    return this.http.get(this.host+"/all/module/published");
  }

  //find modules that learner is subscribe
  getLearnerModules(data:any){
    return this.http.post(this.host+"/learner/inscriptions", data);
  }

  //get category
  getCategoryById(id:any){
    return this.http.get(this.host+"/category/"+id);
  }

  //chapitre by module
  getChapitreByModule(id:any){
    return this.http.get(this.host+"/module/chapters/"+id);
  }
}
