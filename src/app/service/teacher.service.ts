import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { colorentity } from '../Entity/colorentity';
import { Teacher } from '../Modal/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { 

  }
  GetTeacher():Observable<Teacher[]>{
    return this.http.get<Teacher[]>("http://localhost:3000/teacher");
  }

  Saveteacher(data:any){
    return this.http.post("http://localhost:3000",data);
  }
}
