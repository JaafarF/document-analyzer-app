import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/loader.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  public host = environment.apiUrl;

  constructor(private loaderService: LoaderService, private http: HttpClient) { }

  uploadFile(formData: FormData): Observable<HttpResponse<any>> {
    this.loaderService.show();
    return this.http.post<any>(`${this.host}/api/document`, formData,  { observe: 'response' });
  }
}
