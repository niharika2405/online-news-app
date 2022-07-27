import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/user.model';
import { UserAuth } from 'src/userAuth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  
registerUser(user:User)
{

return  this.http.post<User>('http://localhost:1234/users',user);
}


loginUser(userAuth:UserAuth)
{
return  this.http.post<User>('http://localhost:1234/users/login',userAuth);
}


forgotPass(emailId:string,securityQuestion:string,securityAnswer:string)
{
  return this.http.get<User>(`http://localhost:1234/users/forgotpassword/${emailId}/${securityQuestion}/${securityAnswer}/`)
}


resetPass(user:User){

  return this.http.put<User>('http://localhost:1234/users/resetpassword',user);
}


getHeadlines(){
  return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=bf8449df9c0e44478c645f007092fed7')
}


updateProfileSrv(user:User){
  return this.http.put<User>('http://localhost:1234/users/updateprofile',user)
}


getSports(){
  return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bf8449df9c0e44478c645f007092fed7')
}

getBusiness(){
  return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bf8449df9c0e44478c645f007092fed7')
}

getHealth(){
  return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=bf8449df9c0e44478c645f007092fed7')
}


getSearch(query:String){
  return this.http.get('https://newsapi.org/v2/everything?q='+query+'&apiKey=bf8449df9c0e44478c645f007092fed7')
}
}
