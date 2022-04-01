import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

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

  //login
  login(data:any){
    return this.http.post(this.host+"login", data)
  }

  downloadFile(filename:any): Observable<any> {
    return this.http.get(`${this.host}download/` + filename, { responseType: 'blob' }).pipe(map((resp:any)=>{
      console.log(resp);
      {
        
      }
      return {
          filename: filename,
          data: resp.value
      };
  }));
  }

  getPdf(filename:any) {

    const httpOptions = {
      responseType:( 'blob' as 'json')
    };
  
    return this.http.get(`${this.host}download/`+filename, httpOptions);
  }
}
