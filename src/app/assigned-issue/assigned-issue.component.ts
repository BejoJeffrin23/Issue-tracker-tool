import { Component, OnInit } from '@angular/core';
import { IssueService } from '.././issue.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var require: any
const sortOn = require('sort-on');
import{SocketService} from './../socket.service'


@Component({
  selector: 'app-assigned-issue',
  templateUrl: './assigned-issue.component.html',
  styleUrls: ['./assigned-issue.component.css']
})
export class AssignedIssueComponent implements OnInit {

  public authToken: any;
  public userInfo: any;
  public receiverId:any;
  public receiverName:any;

  public userList: any = [];
  public disconnectedSocket: boolean;



  public details:any
public fullName=Cookie.get("userName");
public array:any=[];
public p: Number = 1;
  public count: Number = 7;
  public sortOrder: boolean = false;
  public field: String;


  constructor(public SocketService:SocketService, public Service:IssueService,public toastr: ToastrService, public router: Router) {
    this.receiverId=Cookie.get("userId")
    this.receiverName=Cookie.get("userName")
  }





  ngOnInit() {
this.authToken=Cookie.get("authtoken")
this.userInfo=this.Service.getUserInfoInLocalStorage();    
      this.assigned()
      this.commentnotify();
      this.issuenotify();
      this.watchnotify()   
  }



//function to get assigned issues
public assigned=()=>{
  this.Service.dashboard().subscribe((data)=>{
    this.details=data["data"]
       
    for(let issue of this.details){
      if(this.fullName==issue.assignee){
        this.array.push(issue);
      }
    }
  
  })}
// end of assigned issues function

 

 
   
  
// Log out function
  public logout = () => {

    this.Service.logout().subscribe((apiResponse) => {

      if (apiResponse.status === 200) {
        this.SocketService.disconnect()
        this.SocketService.exitSocket()
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
// end of log-out function


//function to sort items
  public sa=()=>{
    this.array= sortOn(this.array, ['status']);
  }
  public sd=()=>{
    this.array= sortOn(this.array, ['-status']);
  }
  public ta=()=>{
    this.array= sortOn(this.array, ['issueTitle']);
  }
  public td=()=>{
    this.array= sortOn(this.array, ['-issueTitle']);
  }
  public ra=()=>{
    this.array= sortOn(this.array, ['reporterName']);
  }
  public rd=()=>{
    this.array= sortOn(this.array, ['-reporterName']);
  }
  public ca=()=>{
    this.array= sortOn(this.array, ['createdOn']);
  }
  public cd=()=>{
    this.array= sortOn(this.array, ['-createdOn']);
  }
  // end of sort item function

  //function to set color to issue based on status
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

    //socket function to notify comments
  public commentnotify = () => {
    this.SocketService.commentNotify().subscribe((data) => {
      if(data.name=data.reporter){this.toastr.success(`${data.name} has commented his issue`)}else{
        this.toastr.success(` ${data.name} has commented on ${data.reporter}s issue`)}
    })
  }

  //socket function to notify adding watchers
  public watchnotify = () => {
    this.SocketService.watchNotify().subscribe((data) => {
      if(data.name=data.reporter){this.toastr.success(`${data.name} has added himself as watcher`)}else{
        this.toastr.success(` ${data.name} has added himself as watcher in  ${data.reporter}s issue`)}
    })
  }
//socket function to notify adding issues
  public issuenotify = () => {
    this.SocketService.issueNotify().subscribe((data) => {
      if(data.name=data.reporter){this.toastr.success(`${data.name} has edited his issue`)}else{
      this.toastr.success(` ${data.name} has edited ${data.reporter}s issue`)}
    })
  }
  

}
