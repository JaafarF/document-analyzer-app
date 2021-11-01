import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AnalysisComponent } from "./analysis.component";
import { SideBarComponent } from './side-bar/side-bar.component';
import { InputComponent } from './input/input.component';
import { ClassificationComponent } from './classification/classification.component';
import { EntitiesComponent } from './entities/entities.component';
import { KeyElementsComponent } from './key-elements/key-elements.component';
import { FileUploadComponent } from './input/file-upload/file-upload.component';

import {FileUploadModule} from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { CatTableComponent } from './cat-table/cat-table.component';

import { FileUploadService } from "./input/file-upload/file-upload.service";
import { FormsModule } from "@angular/forms";
import { ClassificationService } from "./classification/classification.service";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AnalysisComponent,
    SideBarComponent,
    InputComponent,
    ClassificationComponent,
    EntitiesComponent,
    KeyElementsComponent,
    FileUploadComponent,
    CatTableComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: AnalysisComponent, children: [
          { path: '', redirectTo: 'input', pathMatch: 'full' },
          { path: 'input', component: InputComponent },
          { path: 'classification', component: ClassificationComponent },
          { path: 'entities', component: EntitiesComponent },
          { path: 'key-elements', component: KeyElementsComponent },
        ]
      },
    ]),
    CommonModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ChartModule,
    TableModule,
    ProgressSpinnerModule
  ],
  providers: [FileUploadService, ClassificationService]
})
export class AnalysisModule{}
