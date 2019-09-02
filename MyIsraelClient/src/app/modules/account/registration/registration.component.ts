import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CustomValidators } from './custom-validators';
import { AuthService } from '../../../services/auth.service';
import {MatDatepickerModule} from '@angular/material/datepicker'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public Status = 0;
  title = 'LoginForm';
  _genders = gender;
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Minimum six characters, at least one letter and one number:
  patternNormal: any = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$";

  //Minimum eight characters, at least one letter, one number and one special character:
  patternMedium: any = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$";

  //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  patternHign: any = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

  errorMgs: string;
  selectedPattern: string;
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  signupForm: FormGroup;
  errors = {
    required:'this is required',
    usernameIsForbidden: 'usernameIsForbidden',
    invalidUserName: 'invalidUserName',
    invalidPassword: 'Password must have min 6 char,atleast 1 num and 1 char'
  };

  constructor(
    public authService:AuthService
  ) { }


  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'firstname': new FormControl(
          null,
          Validators.required
        ),
        'lastname': new FormControl(
          null,
          Validators.required
        ),
        'username': new FormControl(
          null, 
          [Validators.required, CustomValidators.invalidUserName], 
          CustomValidators.forbiddenUsername),
        'newpassword': new FormControl(
          null, 
          Validators.required,
          CustomValidators.paternValidator(this.patternNormal)),
        'birthday': new FormControl(
          null,
          Validators.required, 
        ),
        'gender': new FormControl(
          1,
          Validators.required
        ),
      })
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    // this.signupForm.statusChanges.subscribe(
    //   (value) => console.log(value)
    // );


    this.selectedPattern = this.patternNormal; //will change based on user preference
    
    if (this.selectedPattern === this.patternNormal) {
      this.errorMgs = 'Password must have min 6 char,atleast 1 num and 1 char'
    } else if (this.selectedPattern === this.patternMedium) {
      this.errorMgs = 'Minimum eight characters, at least one letter, one number and one special character'
    } else if (this.selectedPattern === this.patternHign) {
      this.errorMgs = 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
    }

    // https://andrewlock.net/creating-custom-password-validators-for-asp-net-core-identity-2/
  }




  getErrorMessage(error:any){
    if(!error)
    return "";
    console.log(error);
    let errorKey = Object.keys(error)[0];
    //console.log(errorKey);
    //console.log(this.errorMgs);
    return this.errors[errorKey];
  }

  onSubmit(){
     console.log(this.signupForm.value.userData);
    if(this.signupForm.valid)
    {
      this.authService.register(this.signupForm.value.userData).subscribe(
        ok => {
          if( ok["status"] === 200 || ok["status"] === 201)
            this.Status = 1;
          
        },
        err => {
          //if( err["status"] < 00 || err["status"] === 500)
            this.Status = 2;
        } 
      );
    }
    //console.log(this.signupForm);
    //this.signupForm.reset();
  }
onReset(){
  this.signupForm.reset();
}

}

export enum gender{
  זכר = 1,
  נקבה = 2,
  אחר = 3
}