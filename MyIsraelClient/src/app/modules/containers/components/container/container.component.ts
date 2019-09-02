import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
  })

  export class ContainerComponent implements OnInit {
    constructor(){
      console.log("container.components - constructor");
    }
    ngOnInit() {
      console.log("container.components - ngOnInit");
     }
  }