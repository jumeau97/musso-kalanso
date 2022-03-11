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
  return this.http.post(this.host+"/learn/login", user);
}

// add new learner
saveLearner(data:any){
  return this.http.post(this.host+"/learn/save/learner", data);
}
  
}
