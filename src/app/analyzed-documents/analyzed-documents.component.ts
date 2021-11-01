import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoaderService } from '../loader.service';
import { Category } from '../model/category';
import { Document } from '../model/document';
import { Product } from '../model/products';
import { StorageService } from '../storage.service';
import { AnalyzedDocumentsService } from './analyzed-documents.service';

@Component({
  selector: 'app-analyzed-documents',
  templateUrl: './analyzed-documents.component.html',
  styleUrls: ['./analyzed-documents.component.scss']
})
export class AnalyzedDocumentsComponent implements OnInit {

  documents: Document[] = [];
  selectedDocuments!: Document[];
  subscription!: Subscription;

  constructor(private loaderService: LoaderService, private _Activatedroute:ActivatedRoute, private analyzedDocumentsService: AnalyzedDocumentsService, private storageService: StorageService) {
   }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      let categoryId = params.get('cat');
      this.loaderService.show();
      if (categoryId != "0") {
        this.getDocumentsByCategory(categoryId!);
      } else {
        this.getAllDocuments();
      }
    });
    //this.analyzedDocumentsService.getProducts().then(data => this.products = data);


  }

  getAllDocuments() {
    this.analyzedDocumentsService.getAllDocuments().subscribe(
      (response: any) => {
        this.loaderService.hide();
          this.documents = response;
          this.storageService.saveDocuments(this.documents);
      }
    );
  }

  getDocumentsByCategory(category: string) {
    this.analyzedDocumentsService.getDocumentsByCategory(category).subscribe(
      (response: any) => {
        this.loaderService.hide();
          this.documents = response;
          this.storageService.saveDocuments(this.documents);
      }
    );
  }

  deleteDocument(document: Document) {
    this.analyzedDocumentsService.deleteDocument(document.id!).subscribe(
      (response: any) => {
        this.documents = response;
        this.storageService.saveDocuments(this.documents);
    }
    );
  }

  onRowSelect(event:any) {
    console.log(event.data.name);
  }

  onRowUnselect(event:any) {
    console.log(event.data.name);
  }

}
