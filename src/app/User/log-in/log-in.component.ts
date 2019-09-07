import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { IssueService } from '../../issue.service';
import { ToastrService } from 'ngx-toastr';
import { SocketService } from './../../socket.service'


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public email: any;
  public password: any;

  public userList: any = [];
  public disconnectedSocket: boolean;
  public authToken: any = Cookie.get('authtoken')

  constructor(
    public appService: IssueService,
    public router: Router,
    private toastr: ToastrService,
    public SocketService: SocketService
  ) {



  }

  ngOnInit() {

  }


  // Move to Sign-up page function
  public goToSignUp: any = () => {

    this.router.navigate(['/signup']);

  } // end goToSignUp


  // Log-in function
  public signinFunction: any = () => {

    if (!this.email) {
      this.toastr.warning('enter email')


    } else if (!this.password) {

      this.toastr.warning('enter password')


    } else {
      let data = {
        email: this.email,
        password: this.password
      }
      this.appService.signinFunction(data)
        .subscribe((apiResponse) => {
          this.toastr.success('Login success')
          if (apiResponse.status === 200) {
            this.SocketService.verifyUser(apiResponse.data.authToken)
              .subscribe((data) => {
                console.log("working")
                this.disconnectedSocket = false;

              });
            Cookie.set('authtoken', apiResponse.data.authToken);

            Cookie.set('userId', apiResponse.data.userDetails.userId);

            Cookie.set('userName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);

            this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails)

            this.router.navigate(['/assign']);

          } else {

            this.toastr.error(apiResponse.message)


          }

        }, (err) => {
          this.toastr.error('some error occured')

        });

    } // end condition

  } // end Log-inFunction

}