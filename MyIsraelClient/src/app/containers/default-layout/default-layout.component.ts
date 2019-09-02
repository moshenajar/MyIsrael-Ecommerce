import { Component, OnInit ,ElementRef} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //const tokenKey = "access_token";
    //let accessAndIdTokens:string  = this.activatedRoute.snapshot.fragment;
    //let accessTokenIndex:number = accessAndIdTokens.indexOf(tokenKey)
    //console.log(accessTokenIndex);
    //let accessToken = accessAndIdTokens.substring(accessTokenIndex+tokenKey.length+1);
  }
}
