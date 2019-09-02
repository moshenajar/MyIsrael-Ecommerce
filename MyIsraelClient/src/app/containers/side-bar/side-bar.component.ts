import { Component, OnInit ,ElementRef } from '@angular/core';
import { SideBarService } from 'src/app/core/services/side-bar.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
//import { User } from 'oidc-client';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  isAuthenticated: boolean;
  isCustomer: boolean = true;
  subscription:Subscription;

 constructor(public el: ElementRef,
    private sideBarService : SideBarService,
    public authService:AuthService,
    public router: Router,
   // public user: User
  ) { }

  ngOnInit() {
    this.sideBarService.currentState.subscribe((currentState : boolean)=>{
      if(currentState)
        this.onOpen();
      else
        this.onClose();
    });
    
    this.subscription = this.authService._authAuthenticated$.subscribe(status => this.isAuthenticated = status);
  }

  onOpen()
  {
    this.el.nativeElement.querySelector("#sidebar").classList.add('sidebar-active');
     this.authService.getUser().then(user => {
       console.log( user.profile );
     });
     
    //this.el.nativeElement.querySelector("#grid").classList.add('posittion-fixed');
   
   // this.el.nativeElement.querySelector(".sidebar-item").classList.add('active');
    
  }

  onClose()
  {
    this.el.nativeElement.querySelector("#sidebar").classList.remove('sidebar-active');
    //this.el.nativeElement.querySelector("#grid").classList.remove('posittion-fixed');
    //this.el.nativeElement.querySelector(".sidebar-item").classList.remove('active');
  }

  mobileClose(){
    this.onClose();
    this.sideBarService.close();
  }

  login() {     
    this.authService.login();
  }  

  signout(){
    this.authService.signout();
  }

  registration(){
    this.router.navigateByUrl('registration');
    this.mobileClose();
  }

  
}
