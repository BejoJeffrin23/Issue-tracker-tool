import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { Router } from '@angular/router';
import { IssueService } from '../../issue.service';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  public firstName:any;
  public lastName:any
  public email: any;
  public password: any;
  public mobileNumber: number;
  public confirmPassword:any;
 

  constructor(     public router:Router,
    public socialAuthService: AuthService,
    private toastr: ToastrService,
    public service:IssueService
    ) {}

// function to move to log-in page
  public goToLogin: any = () => {

    this.router.navigate(['/login']);

  } 
//end of move to log-in function


  //function for Social platform signin using Google account
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
     if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        let name = userData.name.split(" ");
        let firstName = name[0];
        let possibleLastName = [];
  
        for (let i = 0; i < name.length; i++) {
          if (i !== 0) {
            possibleLastName.push(name[i]);
          }
        }
        let lastName = possibleLastName.join(' ');
        let data = {
          firstName: firstName,
          lastName: lastName,
          email: userData.email
        }
        this.service.Google(data).subscribe(
          (apiResponse) => {
  
  
  
            if(apiResponse.status === 200){
  
  
              this.toastr.success('Signup successful');
  

             Cookie.set('authtoken', apiResponse.data.authToken);
            
             Cookie.set('userId', apiResponse.data.userDetails.userId);
            
             Cookie.set('userName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
           
             this.service.setUserInfoInLocalStorage(apiResponse.data.userDetails)
            
             this.router.navigate(['/assign']);

            }
  
            else {
              this.toastr.error(apiResponse.message);
  
            }
  
  
          },(err)=>{
  
            this.toastr.error('some error occured');
  
  
          });
      }
    );
  }
//End of social platform signin function





// Sign-up function

  public signupFunction(): any {

    if(!this.firstName){

      this.toastr.warning('Enter your first name');
    }

    else if(!this.lastName){

      this.toastr.warning('Enter your last name');
    }

    else if(!this. mobileNumber){

      this.toastr.warning('mobileNumber is required');
    }

    else if(!this.email){

      this.toastr.warning('Enter your email');
    }

    else if(!this.password){

      this.toastr.warning('Enter the password');
    }
    else {
      let data={
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        password:this.password,
        mobileNumber: this.mobileNumber,
      }


      this.service.signupFunction(data).subscribe(
        (apiResponse) => {



          if(apiResponse.status === 200){


            this.toastr.success('Signup successful');

            setTimeout(()=>{
              this.goToLogin();

            },2000);
          }

          else {
            this.toastr.error(apiResponse.message);

          }


        },(err)=>{

          this.toastr.error('some error occured');


        });}
        
        

}}

// end of Sign-up function