import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var require: any
const sortOn = require('sort-on');
declare var $:any;
import { IssueService } from '.././issue.service';
import {SocketService} from './../socket.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public details:any
 public p: Number = 1;
  public count: Number = 7;
  public sortOrder: boolean = false;
  public field: String;
  constructor(public socket:SocketService, public appService: IssueService, public toastr: ToastrService, public router: Router
  ) { }

  ngOnInit() {
    this.appService.dashboard().subscribe((data)=>{
      this.details=data["data"]
      console.log(this.details)
          })
          this.commentnotify();
          this.watchnotify();
          this.issuenotify()
  }

  


/*
public search=(key)=>{
  let keyt:any;
for(var i=0;i<this.details.length;i++){
  for(keyt in this.details[i]){
    
  if(this.details[i][keyt]===key){
    console.log(this.details[i])
   return this.details=[this.details[i]]
  }

}}
}
*/

  // function for sorting the issues
  public sa=()=>{
  this.details= sortOn(this.details, ['status']);
}
public sd=()=>{
  this.details= sortOn(this.details, ['-status']);
}
public ta=()=>{
  this.details= sortOn(this.details, ['issueTitle']);
}
public td=()=>{
  this.details= sortOn(this.details, ['-issueTitle']);
}
public ra=()=>{
  this.details= sortOn(this.details, ['reporterName']);
}
public rd=()=>{
  this.details= sortOn(this.details, ['-reporterName']);
}
public ca=()=>{
  this.details= sortOn(this.details, ['createdOn']);
}
public cd=()=>{
  this.details= sortOn(this.details, ['-createdOn']);
}
// end of sort function

//Set color to issue based on status
public setColor(status){
  switch(status){
    case 'Done':
      return "LawnGreen";
      case 'In-test':
        return "LightSkyBlue";
        case 'In-progress':
        return "LightGreen";
        case 'Backlog':
          return 'LightCoral';
  }
  }
//end of set color function

// log-out function
  public logout = () => {

    this.appService.logout().subscribe((apiResponse) => {

      if (apiResponse.status === 200) {
        console.log("logout called")
        Cookie.delete('authtoken');
        Cookie.delete('userName');
        this.router.navigate(['/login']);

      } else {
        this.toastr.error(apiResponse.message)
      } // end condition

    }, (err) => {
      this.toastr.error('Internal Server Error occured')

    });

  }
// end of log out function

 //socket function to notify comments
 public commentnotify = () => {
  this.socket.commentNotify().subscribe((data) => {
    if(data.name=data.reporter){this.toastr.success(`${data.name} has commented his issue`)}else{
      this.toastr.success(` ${data.name} has commented on ${data.reporter}s issue`)}
  })
}

//socket function to notify adding watchers
public watchnotify = () => {
  this.socket.watchNotify().subscribe((data) => {
    if(data.name=data.reporter){this.toastr.success(`${data.name} has added himself as watcher`)}else{
      this.toastr.success(` ${data.name} has added himself as watcher in  ${data.reporter}s issue`)}
  })
}
//socket function to notify adding issues
public issuenotify = () => {
  this.socket.issueNotify().subscribe((data) => {
    if(data.name=data.reporter){this.toastr.success(`${data.name} has edited his issue`)}else{
    this.toastr.success(` ${data.name} has edited ${data.reporter}s issue`)}
  })
}

}