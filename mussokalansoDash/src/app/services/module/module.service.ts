import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
host=environment.host;
  constructor(private http: HttpClient) { }

  // save module
  saveModule(data:any){
    return this.http.post(this.host+"save/module", data);
  }

  //find all module
  findAllModule(){
    return this.http.get(this.host+"all/module");
  }
}
