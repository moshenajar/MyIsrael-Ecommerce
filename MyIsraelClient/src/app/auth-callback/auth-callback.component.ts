import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  error: boolean;

  constructor(private authService: AuthService, 
              private router: Router, 
              private route: ActivatedRoute) {}

  ngOnInit() {
      this.authService.completeAuthentication();
      this.router.navigate(['home']); 
  }
/**ver 1 
  async ngOnInit() {
    // check for error
    if (this.route.snapshot.fragment.indexOf('error') >= 0) {
      this.error=true; 
      return;    
    }
   // debugger;
    this.authService.completeAuthentication();    
    this.router.navigate(['home']);    
   

   
  }
  */

}

