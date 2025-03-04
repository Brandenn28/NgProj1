import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject, Input, Output, EventEmitter, signal } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { Console } from 'node:console';
import { emit } from 'node:process';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-workstation-image-uploader',
  imports: [FileUpload, ToastModule,CommonModule],
  templateUrl: './workstation-image-uploader.component.html',
  styleUrl: './workstation-image-uploader.component.css'
})


export class WorkstationImageUploaderComponent {

  maxFileSize = signal(1000000);

  //Dependency Injection
  storage:Storage=inject(Storage);
  messageService:MessageService = inject(MessageService);

  async cloudStorageUpload(){
    if(!this.uploadedFiles || this.uploadedFiles.length ===0){
      console.log("imageUploader array is empty");
      return;
    }

    for(let file of this.uploadedFiles){
      const pathsanitiser = `workhub/images/${Date.now()}_${file.name}`;
      const filepath = ref(this.storage, pathsanitiser);
      try{
        const snapshot = await uploadBytes(filepath, file);
        await this.successfulUploads.push(pathsanitiser);
        console.log(this.successfulUploads);
      }catch{
        this.failedUploads.push(pathsanitiser);
        console.log("error imageUploader");
      } 
    }

  }



  uploadedFiles: File[] = [];
  successfulUploads: string[] = [];
  failedUploads:string[]=[];      

  onRemove(event:any){
    this.uploadedFiles = this.uploadedFiles.filter(file=>file!==event.file);
    console.log(this.uploadedFiles);
  }

  onUpload(event:any) {
      for(let uploadedFiles of event.files) {
        if(uploadedFiles.size<=this.maxFileSize()){

        this.uploadedFiles.push(uploadedFiles);
        }
      }
      // console.log(this.uploadedFiles);
    
  }
  ngOnInIt(){
    // console.log();
  }
}

