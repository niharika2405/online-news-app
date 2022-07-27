import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fav } from 'src/Fav.model';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  constructor(private http:HttpClient) { }

  addToFav(fav:Fav){
    return this.http.post<Fav>('http://localhost:5555/favourite',fav)
  }

  show(userName:String){
    return this.http.get<Fav[]>(`http://localhost:5555/favourite/${userName}`)

  }

  delete(userName:String,title:String){
    let fav=new Fav()
    fav.userName=userName
    fav.title=title
    return this.http.post('http://localhost:5555/favourite/delete',fav)
  }
}



