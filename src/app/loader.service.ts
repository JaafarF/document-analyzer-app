import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  state = new Subject<boolean>();

  show() {
    this.state.next(true);
  }

  hide() {
    this.state.next(false);
  }
}
