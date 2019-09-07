import { Injectable } from '@angular/core';
import{HttpHeaders,HttpParams} from '@angular/common/http';
import{HttpClient}from '@angular/common/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import{Observable, from} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private url = '/api/v1/users';


  constructor(
    public http: HttpClient

  ) { }
  public getUserInfoInLocalStorage=()=>{
    return JSON.parse(localStorage.getItem('userInfo'))
  }
  public setUserInfoInLocalStorage=(data)=>{

    localStorage.setItem('userInfo',JSON.stringify(data))
  }

  public signinFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.url}/login`, params);
  } // end of signinFunction function.


public Google(data):Observable<any>{
  const params = new HttpParams()
  .set('firstName', data.firstName)
  .set('lastName', data.lastName)
  .set('email', data.email)
  return this.http.post(`${this.url}/google`,params)
}

  public signupFunction  (data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobileNumber', data.mobileNumber)
      .set('email', data.email)
      .set('password', data.password)

    return this.http.post(`${this.url}/signup`, params);

  } // end of signupFunction function.

  public logout(): Observable<any> {
    const params = new HttpParams()
    .set('authtoken', Cookie.get('authtoken'));

    return this.http.post(`${this.url}/logout?authToken=${Cookie.get('authtoken')}`,params);

  } // end logout function

public dashboard():Observable<any>{
  return this.http.get(`${this.url}/issues`);
}


public Upload(data):Observable<any>{
  console.log(data)
    const issueData = new FormData();
    issueData.append("issueTitle", data.title);
    issueData.append("description", data.description);
    issueData.append("status", data.status);
    issueData.append("productImage", data.image, data.name);
issueData.append("reporterName",data.reporterName);
issueData.append("assignee",data.assignee)
console.log(issueData)

    return this.http.post(`${this.url}/create`, issueData)

}

public getsingle(issueId):any{
  return this.http.get(`${this.url}/${issueId}/getone`,issueId)
 
 }

 public edit(issueId,data):any{
   let formdata:any
   const formData = new FormData() 

   if (data.image) {
  formData.append("issueTitle", data.issueTitle);
  formData.append("description", data.description);
  formData.append("status", data.status);
  formData.append("productImage", data.image, data.name);
formData.append("reporterName",data.reporterName);
formData.append("assignee",data.assignee)
console.log(formData)}
else if(!data.image){
  formData.append("issueTitle", data.issueTitle);
  formData.append("description", data.description);
  formData.append("status", data.status);
  formData.append("productImage", data.productImage);
formData.append("reporterName",data.reporterName);
formData.append("assignee",data.assignee)
}
console.log(formData)

  return this.http.put(`${this.url}/${issueId}/edit`,formData||formdata)

}

public allUser():any{
  return this.http.get(`${this.url}/allUsers`)
}

public delete(issueId):any{
return this.http.post(`${this.url}/${issueId}/delete`,issueId)
}

public comment(issueId,data){
  console.log(data)
  return this.http.put(`${this.url}/${issueId}/comment`,data)
}

public watch(issueId,data){
  console.log(data)
  return this.http.put(`${this.url}/${issueId}/watch`,data)
}

}