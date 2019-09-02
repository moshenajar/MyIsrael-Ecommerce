import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User, WebStorageStateStore } from 'oidc-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'; 

import { BaseService } from "../shared/base.service";
import { ConfigService } from '../shared/config.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService  {

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  private manager = new UserManager(getClientSettings());
  //private manager: UserManager;
  private user: User = null;


  // Observable navItem source
  private _authAuthenticatedSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  _authAuthenticated$ = this._authAuthenticatedSource.asObservable();


  constructor(private http: HttpClient, private configService: ConfigService) { 
    super(); 
    /*ver 2 start */
    console.log("constructor:auth.service");
    this.manager.getUser().then(user => {
      this.user = user;

      this._authAuthenticatedSource.next(this.isAuthenticated());
     console.log(this.user);   
    });
    /**ver 2 end */
    /*  Ver 1
    this.manager.getUser().then(user => { 
     
      this.user = user;
      if (!this.user) {
         this.manager.signinRedirectCallback();
      }

      console.log(this.user);   
      this._authNavStatusSource.next(this.isAuthenticated());
    });
    */
  }

  /**ver 2 start */
  

  getClaims(): any {
    return this.user.profile;
  } 

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
      return this.manager.signinRedirectCallback().then(user => {
          this.user = user;
          
          //tomer's advice- emitted the _authNavStatusSource again after setting a new user
          this._authAuthenticatedSource.next(this.isAuthenticated());

      });
  }
  /**ver 2 end */

  public getUser(): Promise<User> {
    return this.manager.getUser();
  }

  /*async getUser() {
    const user = await this.manager.getUser();
    if (!user) {
      return await this.manager.signinRedirectCallback();
    }

    return user;
  }*/
/*
  async getCurrrentUser() {
    const user = await this.manager.getUser();
    return user;
  }
  */

  login() { 
    return this.manager.signinRedirect();   
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  /* ver 1
  isLoggedIn(): boolean {
    if(this.user == null)
    {
      this.manager.getUser().then(user => {
        this.user = user;
      })
    }
    return this.user != null && !this.user.expired;
  } */

  register(userRegistration: any) {    
    return this.http.post(this.configService.authApiURI + '/account/Registration', userRegistration, {observe: 'response'})
    // .pipe(map(responseData =>
    //   {
    //     const postArray = [];
    //     for (const key in responseData)
    //       if(responseData.hasOwnProperty(key))
    //       {
    //         postArray.push(responseData[key])
    //       }
    //       return postArray;
    //   }))
    //.pipe(catchError(this.handleError));
  }

  /**ver 1 
  getClaims(): any {
    return this.user.profile;
  }
  
  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  async completeAuthentication() {
    this.user = await this.manager.signinRedirectCallback();
    console.log(this.user);
    this._authNavStatusSource.next(this.isAuthenticated());  
  }  
  */

  get authorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  get name(): string {
    return this.user != null ? this.user.profile.name : '';
  }

  signout() {
    this.manager.signoutRedirect().then(() => {
      this.manager.clearStaleState();
    })
  }

}

export function getClientSettings(): UserManagerSettings {
  return {
      authority: 'http://localhost:5000',
      client_id: 'ng',
      redirect_uri: 'http://localhost:4200/auth-callback',
      //post_logout_redirect_uri: 'http://localhost:4200/signout-callback-oidc',
      response_type:"id_token token",
      scope:"openid profile MyIsraelApi",
      filterProtocolClaims: true,
      loadUserInfo: true,
      //automaticSilentRenew: true,
      //silent_redirect_uri: 'http://localhost:4200/silent-refresh.html'
      userStore: new WebStorageStateStore({ store: window.localStorage })
  };
}
