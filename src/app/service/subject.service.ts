import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorentity } from '../Entity/colorentity';
import { Subject } from '../Modal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) {

   }

   GetSubject():Observable<Subject[]>{
    return this.http.get<Subject[]>("http://localhost:3000/subjects");
  }

  Savesubject(data:any){
    return this.http.post("http://localhost:3000",data);
  }
}
