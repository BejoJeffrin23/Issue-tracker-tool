import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { SocketService } from './../socket.service'
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {

  editorConfig = {
    "editable": true,
    "spellcheck": true,
    "height": "25vmin",
    "minHeight": "0",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "placeholder": "Enter text here...",
    "imageEndPoint": "",
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
      ["fontName", "fontSize", "color"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
      ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
      ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"]
    ]
  }



  constructor(public SocketService: SocketService, public toastr: ToastrService, public Service: IssueService, public _route: ActivatedRoute, public router: Router) { }
  public currentBlog;
  public image: any;
  public name: any;
  public imagePreview: any;
  public issue: any;
  public issued: any;
  public users: any;
  public allusers: any = []

  ngOnInit() {

    this.allUsers()

    let issueId = this._route.snapshot.paramMap.get('id');
    this.issued = this.Service.getsingle(issueId).subscribe(
      data => {
        this.issued = data['data'];
        // this.upload();
      })

    this.issuenotify()
    this.commentnotify()
    this.watchnotify()

  }



  //function to get list of name of all users
  public allUsers = () => {
    this.Service.allUser().subscribe((apiResponse: any) => {
      this.users = apiResponse.data;
      this.allusers = [];
      for (let user of this.users) {
        let name = `${user.firstName} ${user.lastName}`
        this.allusers.push(name)

      }
    })
  }



  //function to load and preview image
  file: File;
  Selected(event) {
    this.file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result.toString();
    }
    reader.readAsDataURL(this.file)
  }

  //function to edit Issue
  public editIssue() {
    if (this.file) {
      this.issued.image = this.file;
      this.issued.name = this.file.name
    }

    this.Service.edit(this.issued.issueId, this.issued).subscribe(data => {
      this.toastr.success('blog posted', 'Success')
      //socket function to emit edit event
      this.SocketService.issueUpdated(Cookie.get('userName'),this.issued.reporterName)
      this.issuenotify()
      setTimeout(() => {
        this.router.navigate([`${this.issued.issueId}/view`])
      }, 1000)
    },
      error => {
        console.log(error.errorMessage)
      })
  }
 
//socket function to notify adding watchers
public watchnotify = () => {
  this.SocketService.watchNotify().subscribe((data) => {
    if(data.name=data.reporter){this.toastr.success(`${data.name} has added himself as watcher`)}else{
      this.toastr.success(` ${data.name} has added himself as watcher in  ${data.reporter}s issue`)}
  })
}

  //socket function to notify issue edited event
  public issuenotify = () => {
    this.SocketService.issueNotify().subscribe((data) => {
      if(data.name=data.reporter){this.toastr.success(`${data.name} has edited his issue`)}else{
      this.toastr.success(` ${data.name} has edited ${data.reporter}s issue`)}
    })
  }

 //socket function to notify comments
 public commentnotify = () => {
  this.SocketService.commentNotify().subscribe((data) => {
    if(data.name=data.reporter){this.toastr.success(`${data.name} has commented his issue`)}else{
      this.toastr.success(` ${data.name} has commented on ${data.reporter}s issue`)}
  })
}
  // Log out function
  public logout = () => {

    this.Service.logout().subscribe((apiResponse) => {

      if (apiResponse.status === 200) {
        this.SocketService.disconnect()
        this.SocketService.exitSocket()
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

}
