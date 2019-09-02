import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  private sideOpen = new BehaviorSubject(false);
  currentState = this.sideOpen.asObservable();
  private open = false;
  
  constructor() { }

  close() {
    this.open = ! this.open;
    this.sideOpen.next(false);
  }
  toggle(){
    this.open = ! this.open;
    this.sideOpen.next(this.open);
  }

}
