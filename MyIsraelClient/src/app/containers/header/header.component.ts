//import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { Component, OnInit, Renderer2,Output,EventEmitter,ElementRef, Input, OnDestroy } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { SideBarService } from 'src/app/core/services/side-bar.service';
import { Subscription } from 'rxjs';
//import { AuthService } from '../../services/auth.service'
import { User } from 'oidc-client';
import { AuthService } from '../../services/auth.service';
import { Router, RoutesRecognized } from '@angular/router';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
  name: string;
  isAuthenticated: boolean;
  subscription:Subscription;
  sideBarSubscription: Subscription;
  private user: User | null;
  //visible: boolean = false;
  //@Output() open: EventEmitter<any> = new EventEmitter();
  //@Output() close: EventEmitter<any> = new EventEmitter();

  constructor(
      public translate: TranslateService,
      //@Inject(DOCUMENT) private document: Document,
      private renderer: Renderer2,
      public el: ElementRef,
      private sideBarService : SideBarService,
      private authService:AuthService,
      private router: Router
    ) {
      

    translate.addLangs(['he', 'en']);
    translate.setDefaultLang('he');

    //this.renderer.setAttribute(this.document.body, 'dir', 'rtl');
    this.renderer.setAttribute(document.body, 'dir', 'rtl');
    

    const browserLang = 'he'; //translate.getBrowserLang();
    translate.use(browserLang.match(/he|en/) ? browserLang : 'he');

   }

   routeData : any = null


   switchLanguage(language: string) {
    this.translate.use(language);
    //this.renderer.setAttribute(this.document.body, 'dir', language === 'he' ? 'rtl' : 'ltr');
    this.renderer.setAttribute(document.body, 'dir', language === 'he' ? 'rtl' : 'ltr');
  }

  public toggle2() {
    this.sideBarService.toggle();
  }
  public toggle(sideOpen : boolean) {
    if (sideOpen) {
      //this.open.emit(0);
      this.el.nativeElement.querySelector("#btn").classList.add('active');
      this.renderer.setStyle(document.body, 'position', 'fixed');
     // this.el.nativeElement.querySelector("#sidebar").classList.remove('sidebar-active');
    } else {
      //this.close.emit(1);
      this.el.nativeElement.querySelector("#btn").classList.remove('active');
      this.renderer.removeStyle(document.body, 'position');
      //this.el.nativeElement.querySelector("#sidebar").classList.add('sidebar-active');
    }
  }

  //public toggleSidebar(event) {
   // alert('Open ' );
  //}

  ngOnInit() {
    this.subscription = this.authService._authAuthenticated$.subscribe(status => this.isAuthenticated = status);

    this.router.events.pipe(
    filter(e => e instanceof RoutesRecognized),
    map(e => <RoutesRecognized>e)).subscribe((e)=>{
      console.log('moshe:' + e.id + '_' + e.url);
      
    })

    // .map(e => <RoutesRecognized>e)
    // .subscribe((e) => {
    //     const currentPath = e.state.firstChild(e.state.root)._routeConfig.path
    //     //this.routeData = AppRoutes.find(route => route.path === currentPath)
    // })
    
    //this.name = this.authService.name;

    //if(this.authService.abc ==='moshe')
    //this.authService.abc = 'najar';
    //this.authService.abc = 'moshe';
    
    

  
   // console.log("Moshe:" + this.isAuthenticated);
 /*   this.authService.getUser().then(user => {
      var user = user;
  });*/


  
    this.sideBarSubscription = this.sideBarService.currentState.subscribe((sideOpen)=>{
        this.toggle(sideOpen);
    })
  }

  ngOnDestroy(): void {
    this.sideBarSubscription.unsubscribe();
  }

  //login() {     
  //  this.authService.login();
  //}  
  
 // signout(){
 //   this.authService.signout();
 //}

}
