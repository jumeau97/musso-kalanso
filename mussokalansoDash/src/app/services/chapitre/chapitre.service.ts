import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChapitreService {

  host=environment.host;
  constructor(private http : HttpClient) { }

  //save chapter
  saveChapter(data:any){
  return  this.http.post(this.host+"save/chapitre", data)
  }

  //find chapters by modules
  findChaptersByModule(id:any){
    return this.http.get(this.host+"module/chapters/"+id);
  }

  //delete chapter
  deletechapter(id:any){
   return this.http.delete(this.host+"delete/chapter/"+id);
  }

  //update chapter
  updateChapter(data:any, id:any){
    return this.http.put(this.host+"update/chapitre/"+id, data)
  }

  //list all chapter
  findAllChapitre(){
    return this.http.get(this.host+"allChapitre");
  }
}
