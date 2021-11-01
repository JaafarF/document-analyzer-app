import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  expanded = true;

  expandedEventEmitter = new EventEmitter<boolean>();

  constructor() {
  }

  setExpanded(isExpanded: boolean) {
    this.expanded = isExpanded;
    this.expandedEventEmitter.emit (this.expanded);
  }
}
