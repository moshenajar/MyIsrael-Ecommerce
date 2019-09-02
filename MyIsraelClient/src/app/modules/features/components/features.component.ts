import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
  })

  export class FeaturesComponent implements OnInit {

    constructor(){
      console.log("features.components - constructor");
    }
    ngOnInit() {
      console.log("features.components - ngOnInit");
     }

  }