import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
host=environment.host;
  constructor(private http: HttpClient) { }

login(user:any){
  return this.http.post(this.host+"/login", user);
}
  
}
