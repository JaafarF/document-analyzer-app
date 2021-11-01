import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';
import { FileUploadService } from './file-upload.service';
import { Category } from 'src/app/model/category';
import { Document } from 'src/app/model/document';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  uploadedFiles: any[] = [];
  public document!: File;

  constructor(private loaderService: LoaderService, private router: Router, private fileUploadService: FileUploadService, private storageService: StorageService) { }

  ngOnInit(): void {

  }

  onUpload(event: any) {
    const target= event.target as HTMLInputElement;
    const file: File = (event.files as FileList)[0];
    const formData = new FormData();
    formData.append('document', file);
    this.fileUploadService.uploadFile(formData).subscribe(
      (response: HttpResponse<any>) => {
        this.loaderService.hide();
        let document: Document = response.body;
        document!.categories!.map(category => {
          category.color = this.getCategoryColor();
          category.percentage = category.frequency + '%';
          category.id = category.categoryBaseId+"";
        });
        this.storageService.saveDocument(document);
        this.router.navigateByUrl('/analysis/classification');
      },
      (errorResponse: HttpErrorResponse) => {
        console.log("error");
      }
    );
  }

  private getCategoryColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
