import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { getDownloadURL } from 'firebase/storage';
import { Console } from 'node:console';
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

  
  //Dependency Injection
  private storage:Storage=inject(Storage);
  messageService:MessageService = inject(MessageService);


  async cloudStorageUpload(){
    // return this.uploadedFiles;
    console.log(this.uploadedFiles);
  }



  uploadedFiles: string[] = [];

  onRemove(event:any){
    this.uploadedFiles = this.uploadedFiles.filter(file=>file!==event.file.name);
    console.log(this.uploadedFiles);
  }

  onUpload(event:any) {
    for(let uploadedFiles of event.files) {
        this.uploadedFiles.push(uploadedFiles.name);
    }
    console.log(this.uploadedFiles);
  }
  ngOnInIt(){
    // console.log();
  }
}

