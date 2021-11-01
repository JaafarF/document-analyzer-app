import { Component, OnInit } from '@angular/core';
import { fade, slideRight } from '../animations/animation';
import { AnalysisService } from './analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
  animations: [
    fade,
    slideRight
  ]
})
export class AnalysisComponent implements OnInit {

  expanded = true;

  constructor(private analysisService: AnalysisService) { }

  ngOnInit(): void {
    this.analysisService.expandedEventEmitter.subscribe((value) => {
      this.expanded = value;
    });
  }

}
