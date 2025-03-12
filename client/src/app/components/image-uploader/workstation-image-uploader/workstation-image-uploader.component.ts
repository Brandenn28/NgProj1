import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject, Input, Output, EventEmitter, signal, ViewChild } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { FormControl } from '@angular/forms';
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

  @Input() imagesFC!:FormControl;
  @Output() successUrl = new EventEmitter<void>();
  @Output() updateParentFormControlEmitter = new EventEmitter<any[]>();
  @ViewChild('uploader') uploader!:FileUpload;
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
      }catch(error){
        this.failedUploads.push(pathsanitiser);
        throw new Error("Image Uploader Error");
        // console.log("error imageUploader");
      } 
    }

  }



  uploadedFiles: File[] = [];
  parentFormControlUrl:string[]= [];
  successfulUploads: string[] = [];
  failedUploads:string[]=[];   
  isSaving: boolean = false;   


  onRemove(event:any){
      this.uploadedFiles = this.uploadedFiles.filter(file=>file!==event.file);
      // console.log(this.uploadedFiles);
      this.parentFormControlUrl = this.uploadedFiles.map(file=>file.name);

      this.imagesFC.setValue(this.parentFormControlUrl);
    console.log(this.uploadedFiles);
    console.log(this.parentFormControlUrl);
  }

  onUpload(event:any) {
      for(let uploadedFiles of event.files) {
        if(uploadedFiles.size<=this.maxFileSize()){
          if (!this.uploadedFiles.some(file => file.name === uploadedFiles.name )) {
            this.uploadedFiles.push(uploadedFiles); 
          }
        }
      }
      this.parentFormControlUrl = this.uploadedFiles.map(file=>file.name);
      this.imagesFC.setValue(this.parentFormControlUrl);
      console.log(this.uploadedFiles);
      console.log(this.parentFormControlUrl);
  }

  resetUploader(){
    this.uploader.clear();
  }

  // updateParentFormControl(){  
  //   this.updateParentFormControlEmitter.emit(this.parentFCUrl);
  // }

  uploadSuccessUrl(){
    this.successUrl.emit();
  }
  ngOnInIt(){
    // console.log();
  }
}

