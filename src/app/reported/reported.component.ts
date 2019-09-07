import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { IssueService } from '.././issue.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import{SocketService} from './../socket.service'

declare var require: any
const sortOn = require('sort-on');

@Component({
  selector: 'app-reported',
  templateUrl: './reported.component.html',
  styleUrls: ['./reported.component.css']
})
export class ReportedComponent implements OnInit {

  
  constructor(public socket:SocketService ,public router:Router, public toastr:ToastrService, public Service:IssueService) {}
public details:any
public fullName=Cookie.get("userName");
public array:any=[]
public p: Number = 1;
  public count: Number = 7;

  ngOnInit() {
this.issuenotify();
this.watchnotify();
this.commentnotify()
    //function to get reported issues
    this.Service.dashboard().subscribe((data)=>{
      this.details=data["data"]
      for(let issue of this.details){
        if(this.fullName==issue.reporterName){
          this.array.push(issue);
        }}      
    
    })
  }



  //function to sort the issues
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
  //end of sort function

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



// logout function
    public logout = () => {

      this.Service.logout().subscribe((apiResponse) => {
  
        if (apiResponse.status === 200) {
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
//end of log out function


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
