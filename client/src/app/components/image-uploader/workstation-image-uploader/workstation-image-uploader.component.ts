import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
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
  private storage:Storage=inject(Storage);
  messageService:MessageService = inject(MessageService);

      uploadedFiles: any[] = [];


      onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
        console.log(this.uploadedFiles);
        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
      ngOnInIt(){
        // console.log();
      }
}

