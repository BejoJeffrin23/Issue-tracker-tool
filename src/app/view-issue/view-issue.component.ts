import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { SocketService } from './../socket.service'

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.css']
})
export class ViewIssueComponent implements OnInit {
  public check: any
  editorConfig = {
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "0",
    "width": "90vw",
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


  public issue: any
  public issued: any;
  public comment: any;
  constructor(public socket: SocketService, public toastr: ToastrService, public Service: IssueService, public _route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    // function to get issueId
    let issueId = this._route.snapshot.paramMap.get('id');
    this.issued = this.Service.getsingle(issueId).subscribe(
      data => {
        this.issued = data['data'];
      })
              this.commentnotify()
              this.watchnotify()
              this.issuenotify()


  }



  //function to set as watcher

  public watch() {
    let name = Cookie.get("userName")
    let y: any
    if (this.issued.watchers.length <= 0) {
      let object = { 'watcher': name }
      this.issued.watchers.push(object)
      this.Service.watch(this.issued.issueId, object).subscribe((data) => {
        this.socket.watch(name,this.issued.reporterName)
        this.toastr.success('you are added to watcher list')
      })
    } else {
      let x: any
      for (x of this.issued.watchers) {
        if (x.watcher = name) {
          this.toastr.success('you are already a watcher')
        } else if (this.watch) { } else {
          let object = { 'watcher': name }
          this.issued.watchers.push(object)
          this.Service.watch(this.issued.issueId, object).subscribe((data) => {
            this.socket.watch(name,this.issued.reporterName)
            this.watchnotify()
            this.toastr.success('you are added to watcher list')
          })
        }
      }

    }


  }


  //function to comment on the issue
  public Comment() {
    var name = Cookie.get("userName")
    var object = {
      'name': name,
      'date': Date.now(),
      'comment': this.comment
    }
    if (!object.comment) { this.toastr.error('enter any comment') } else {

      this.issued.comments.push(object)
      this.Service.comment(this.issued.issueId, object).subscribe(data => {
        this.toastr.success("comment uploaded successfully")
        this.socket.comment(name,this.issued.reporterName)
      })
    }
  }
  // end of comment function

  //function to delete issue
  public delete() {
    this.Service.delete(this.issued.issueId).subscribe((data) => {
      this.toastr.success("Issue deleted successfully")
      this.router.navigate(['/home'])
    })
  }
  //end of delete function

  //navigate to edit page
  public edit() {
    this.router.navigate([`${this.issued.issueId}/edit`])
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


  // Log out function
  public logout = () => {

    this.Service.logout().subscribe((apiResponse) => {

      if (apiResponse.status === 200) {
        this.socket.disconnect()
        this.socket.exitSocket()
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
