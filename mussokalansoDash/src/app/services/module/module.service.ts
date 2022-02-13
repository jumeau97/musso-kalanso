import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
host=environment.host;
  constructor(private http: HttpClient) { }

  saveModule(data:any){
    return this.http.post(this.host+"save/module", data);
  }
}
