import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Document } from 'src/app/model/document';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  document!: Document;
  categories: Category[] = [];


  datadoughnut: any;
  data: number[] = [];
  color: string[] = [];
  label: string[] = [];
  options: any;
  subscription!: Subscription;

  constructor(private router: Router, private storageService: StorageService) {}



  ngOnInit() {
    const initialDocument: Document = this.storageService.getDocumentFromStorage();
    this.document = initialDocument;
    this.categories = initialDocument!.categories!;
    this.document!.categories!.forEach(category => {
      this.data.push(category.frequency!);
      this.color.push(category.color!);
      this.label.push(category.label!);
    });

    const sum: any = this.categories?.map(c => c.frequency).reduce((a, b) => a! + b!);
    if (sum < 100) {
      this.data.push((100 - sum));
      this.color.push("#666");
      this.label.push("Others");
    }

    this.datadoughnut = {
      labels: this.label,
      datasets: [
          {
              data: this.data,
              backgroundColor: this.color
      }]
    };

    this.options = {
      //display labels on data elements in graph
      plugins: {
        datalabels: {
          formatter: function(value: any, context: any) {
            return value + '%';
          },
          align: 'end',
          anchor: 'end',
          borderRadius: 4,
          backgroundColor: 'teal',
          color: 'white',
          font: {
            weight: 'bold',
          },
        },
        legend: {
          position: 'left',
        },
        tooltips: {
          mode: 'index',
          intersect: true
        }
      }



    };
  }

  selectData(event: any) {
    console.log(event.element.index);
    console.log(this.document!.categories!.length -1);
    if(event.element.index != this.document!.categories!.length -1) {
      let category: Category = this.document!.categories![event.element.index];
      this.storageService.saveCategory(category);
      this.router.navigateByUrl(`/document/${category.categoryBaseId}`, { state: { hello: 'world' } });
    }
  }
}
