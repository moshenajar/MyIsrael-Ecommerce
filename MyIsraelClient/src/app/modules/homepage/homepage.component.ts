import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

//let widthWin ;
export class HomepageComponent implements OnInit {
  /*constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'he']);
    translate.setDefaultLang('he');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/he|en/) ? browserLang : 'he');
   }*/

  /* onResize(event) {
    return event.target.innerWidth;
  }*/

  constructor(){
    console.log("homepage.components - constructor");
  }
  ngOnInit() {
    console.log("homepage.components - ngOnInit");
   }

}


