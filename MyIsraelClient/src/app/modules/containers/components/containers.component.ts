import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-containers',
    templateUrl: './containers.component.html',
    styleUrls: ['./containers.component.scss']
  })

  export class ContainersComponent implements OnInit {
    constructor(){
      console.log("containers.components - constructor");
    }
    ngOnInit() {
      console.log("containers.components - ngOnInit");
     }
  }