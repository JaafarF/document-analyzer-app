import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AnalyzedDocumentsService {

  public host = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getDocumentsByCategory(category: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${this.host}/api/document/category/${category}`);
  }

  getAllDocuments(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${this.host}/api/document/`);
  }

  deleteDocument(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<any>>(`${this.host}/api/document/${id}`);
  }

}
