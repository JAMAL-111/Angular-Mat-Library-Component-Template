import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorentity } from '../Entity/colorentity';
import { Stream } from '../Modal/Stream';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor(private http:HttpClient) {

   }

   GetStream():Observable<Stream[]>{
    return this.http.get<Stream[]>("http://localhost:3000/streams");
  }

  SaveStream(data:any){
    return this.http.post("http://localhost:3000",data);
  }
}
