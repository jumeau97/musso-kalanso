import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
host = environment.host;
  constructor(private http : HttpClient) { }

  saveUser(data:any){
    this.http.post(this.host+"save/utilisateur", data)
  }
}
