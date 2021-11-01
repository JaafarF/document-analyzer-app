import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../analysis.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  expanded = true;

  constructor(private analysisService: AnalysisService) { }

  ngOnInit(): void {
  }

  toggleExpand() {
    this.analysisService.setExpanded(!this.analysisService.expanded);
    this.expanded = !this.expanded;
  }

}
