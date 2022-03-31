import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  uploadedImage!: File;  
  myFiles:File [] = [];
  dbImage: any; 
  postResponse: any;
  successResponse!: string;
  image: any;
  blob!: Blob;
  constructor(private httpClient: HttpClient, private testService : UtilisateurService) { }

  ngOnInit(): void {
  }

  public onImageUpload(event:any) {    
    // this.uploadedImage = event.target.files[0];
    this.myFiles = [];
    for (var i = 0; i < event.target.files.length; i++) { 
      
      this.myFiles.push(event.target.files[i]);
    }
    console.log("upload",this.myFiles);
    
  }


  imageUploadAction() {    
    const imageFormData = new FormData();
    // imageFormData.append('files', this.uploadedImage, this.uploadedImage.name);

    for (var i = 0; i < this.myFiles.length; i++) { 
      imageFormData.append("files", this.myFiles[i]);
      console.log("name", this.myFiles[i].name);
      
    }
    // console.log("pther upload", imageFormData);
    
  

    this.httpClient.post('http://localhost:8080/multiple/uploads', imageFormData)
      .subscribe((response) => {
        console.log("bonjour", response);
        
        // if (response.status === 200) { 
        //   this.postResponse = response;                
        //   this.successResponse = this.postResponse.body.message;
        // } else {
        //   this.successResponse = 'Image not uploaded due to some error!';
        // }
      }
      );
    }



  viewImage() {
    this.httpClient.get('http://localhost:8080/get/image/info/' + this.image)
      .subscribe(
        res => {
          this.postResponse = res;          
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }

  // download(){
  //   let filename= "cahier.pdf";
  //   this.testService.downloadFile(filename).subscribe((response:any)=>{
  //     var binaryData = [];
  //     binaryData.push(response.data);
  //     console.log("new response", response);
      
  //     // var url = window.URL.createObjectURL(new Blob(binaryData, {type: "application/*"}));
  //     // var a = document.createElement('a');
  //     // document.body.appendChild(a);
  //     // a.setAttribute('style', 'display: none');
  //     // a.setAttribute('target', 'blank');
  //     // a.href = url;
  //     // a.download = response.filename;
  //     // a.click();
  //     // window.URL.revokeObjectURL(url);
  //     // a.remove();
  //   })
  // }

  download(){
    const filename="cahier.pdf";
    this.testService.getPdf(filename).subscribe((data:any) => {

      this.blob = new Blob([data], {type: 'application/pdf'});
    
      var downloadURL = window.URL.createObjectURL(data);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = filename;
      link.click();
    
    });
  }

  

}
