import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/analysis/input', pathMatch: 'full' },
  { path: 'analysis', loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule) },
  { path: 'document/:cat', loadChildren: () => import('./analyzed-documents/analyzed-documents.module').then(m => m.AnalyzedDocumentsModule) },
  { path: '**', redirectTo: '/analysis/input' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
