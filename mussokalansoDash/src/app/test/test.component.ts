import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private httpClient: HttpClient) { }

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

}
