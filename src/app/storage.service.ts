import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Category } from "./model/category";
import { Document } from "./model/document";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private document!: Document;
  private documents: Document[] = [];
  private category!: Category;
  categoryChanged = new Subject<Category>();

  public saveDocument(document: Document): void {
    this.deleteDocument()
    this.document = document;
    localStorage.setItem('document', JSON.stringify(document));
  }

  public saveDocuments(documents: Document[]): void {
    this.documents = [];
    localStorage.removeItem('documents');
    this.documents = documents;
    localStorage.setItem('documents', JSON.stringify(documents));
  }

  public deleteDocument(): void {
    this.document = new Document();
    localStorage.removeItem('document');
  }

  public getDocumentFromStorage(): Document {
    return JSON.parse(localStorage.getItem('document')!);
  }

  public saveCategory(category: Category) {
    localStorage.removeItem('category');
    localStorage.setItem('category', JSON.stringify(category));
    this.categoryChanged.next(category);
  }

}
