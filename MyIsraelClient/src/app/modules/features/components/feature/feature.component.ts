import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.scss']
  })

  export class FeatureComponent implements OnInit {
    constructor(){
      console.log("feature.components - constructor");
    }
    ngOnInit() {
      console.log("feature.components - ngOnInit");
     }
  }