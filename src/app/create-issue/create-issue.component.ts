import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
 import{HttpClient} from '@angular/common/http'
 import { IssueService } from '../issue.service';
 import { ToastrService } from 'ngx-toastr';
import { SocketService } from '../socket.service';


@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})

export class CreateIssueComponent implements OnInit {
  public assignee:any
  public users:any;
  public file:any;
  public allusers:any=[];
public title:any
public status:any
public description:any
public image:any;
public name:any
public imagePreview:any;
  editorConfig={
    "editable": true,
    "spellcheck": true,
    "height": "25vmin",
    "minHeight": "0",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "imageEndPoint": this.file,
    "toolbar": [
        ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
        ["fontName", "fontSize", "color"],
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
        ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"]
    ]
}

  constructor(public socket:SocketService,public toastr:ToastrService, public router:Router, public http:HttpClient,public service:IssueService) { }

  ngOnInit() {
   this.allUsers()
   this.watchnotify();
   this.issuenotify();
   this.commentnotify()
    }

//function to select and preview image
Selected(event){
  this.file=event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result.toString();
}
reader.readAsDataURL(this.file)}


//function to Create issue
Upload(){
  if (!this.title) {

    this.toastr.warning('enter title of the issue')
  } 
 else if(!this.file){
    this.toastr.warning('please select the image of issue')
  }else if (!this.description) {

    this.toastr.warning('type the description of the issue')}
    else if (!this.status) {

      this.toastr.warning('Please select the status of the issue')

    } else if (!this.assignee) {

      this.toastr.warning('Please select the assignee of the issue')

    }
else{
  let data={
    title:this.title,
    description:this.description,
    status:this.status,
    image:this.file,
    name:this.file.name,
    reporterName:Cookie.get("userName"),
    assignee:this.assignee
  }
  this.service.Upload(data).subscribe((Data)=>{
    let Issuedata=Data['data']
    this.toastr.success("Issue created successfully")
    setTimeout(()=>{this.router.navigate([`${Issuedata.issueId}/view`])
  },1000)

  })
}}

//function to get list of all users registered
public allUsers = () => {
  this.service.allUser().subscribe((apiResponse: any) => {
    this.users = apiResponse.data;    
    this.allusers=[];
    for(let user of this.users){
      if(`${user.firstName} ${user.lastName}`!=Cookie.get("userName")){
let name=`${user.firstName} ${user.lastName}`
        this.allusers.push(name)
      }
    }
  })
}


//log out function
public logout = () => {

  this.service.logout().subscribe((apiResponse) => {

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


