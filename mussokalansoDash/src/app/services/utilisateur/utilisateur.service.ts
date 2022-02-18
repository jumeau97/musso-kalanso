import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
host = environment.host;
  constructor(private http : HttpClient) { }

  saveUser(data:any){
  return  this.http.post(this.host+"save/utilisateur", data)
  }

  //find all former
  findAllFormer(){
    return this.http.get(this.host+"list/former");
  }

  //update utilisateur
  updateUser(data:any, id:any){
  return this.http.put(this.host+"update/utilisteur/"+id, data)
  }

  //delete user
  deleteUser(id:any){
    return this.http.delete(this.host+"delete/user/"+id);
  }
}
