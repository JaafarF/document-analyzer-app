import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { AnalyzedDocumentsService } from './analyzed-documents/analyzed-documents.service';
import { StorageService } from './storage.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ProgressSpinnerModule
  ],
  providers: [AnalyzedDocumentsService, StorageService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
