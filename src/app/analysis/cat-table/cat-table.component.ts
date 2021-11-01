import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-cat-table',
  templateUrl: './cat-table.component.html',
  styleUrls: ['./cat-table.component.scss']
})
export class CatTableComponent implements OnInit {

  @Input() categories!: Category[];

  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
  }

  public selectCategory(category: Category) {
    this.storageService.saveCategory(category);
      this.router.navigateByUrl(`/document/${category.categoryBaseId}`, { state: { hello: 'world' } });
  }


}
