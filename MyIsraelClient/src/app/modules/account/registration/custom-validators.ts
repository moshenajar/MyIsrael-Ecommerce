import { FormControl, ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators{

    static invalidUserName(control: FormControl): {[s: string]: boolean} {
        if(control.value === 'Test') {
            return {'invalidUserName': true};
        }
        return null;
    }

    static forbiddenUsername(control: FormControl): Promise<any> | Observable<any>{
        const promise = new Promise<any>((resolve, reject) => {
          setTimeout(() => {
            if (control.value === 'test@test.com'){
              resolve({'usernameIsForbidden': true});
            } else {
              resolve(null);
            }
          }, 1500);
        });
        return promise;
      }

      
      static invalidPassword(control: FormControl): Promise<any> | Observable<any>{
        let REGEXP = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$");
        const promise = new Promise<any>((resolve, reject) => {
            
          setTimeout(() => {
            if (!REGEXP.test(control.value)){
              resolve({'invalidPassword': true});
            } else {
              resolve(null);
            }
          }, 1500);
        });
        return promise;
      }


    static ageRangeValidator(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
                return { 'ageRange': true };
            }
            return null;
        };
    }

    static paternValidator(patern: string): AsyncValidatorFn  {
        return (control: FormControl): Promise<any> | Observable<any> => {
            let regex = new RegExp(patern);

            const promise = new Promise<any>((resolve, reject) => {
            
                setTimeout(() => {
                  if (!regex.test(control.value)){
                    resolve({'invalidPassword': true});
                  } else {
                    resolve(null);
                  }
                }, 1500);
              });
              return promise;
        };
    }
}