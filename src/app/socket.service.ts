import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  
private url ='http://13.232.157.131:4001';
public socket;


  constructor() {
    this.socket=io(this.url)
   }

   public verifyUser=(authToken)=>{
    this.socket.emit('set-user', authToken);

    return Observable.create((observer)=>{
      this.socket.on('verifyUser',(data)=>{
        observer.next(data)
      })
    })
  }

  public disconnect=()=>{
   return Observable.create((observer)=>{
    this.socket.emit('disconnect',()=>{
      observer.next()
    })})
  }

      public exitSocket = () =>{
        this.socket.disconnect();
    
      }

     
public issueUpdated=(name,reporter)=>{
  this.socket.emit('issue-updated',name,reporter)
}

public issueNotify=()=>{
  return Observable.create((observer)=>{
    this.socket.on('issue-updated-notification',(name)=>{
      observer.next(name)
    })
  })
  }


  public comment=(name,reporter)=>{
    this.socket.emit('comment',name,reporter)
  }
  
  public commentNotify=()=>{
    return Observable.create((observer)=>{
      this.socket.on('commentno',(name)=>{
        observer.next(name)
      })
    })
    }

    public watch=(name,reporter)=>{
      this.socket.emit('watch',name)
    }
    
    public watchNotify=()=>{
      return Observable.create((observer)=>{
        this.socket.on('watchno',(name)=>{
          observer.next(name)
        })
      })
      }

}
