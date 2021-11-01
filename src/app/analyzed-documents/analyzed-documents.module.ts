import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AnalyzedDocumentsComponent } from "./analyzed-documents.component";

import {TableModule} from 'primeng/table';
import { ProgressSpinnerModule } from "primeng/progressspinner";


@NgModule({
  declarations: [
    AnalyzedDocumentsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: AnalyzedDocumentsComponent }
    ]),
    TableModule,
    ProgressSpinnerModule
  ]
})
export class AnalyzedDocumentsModule {}
