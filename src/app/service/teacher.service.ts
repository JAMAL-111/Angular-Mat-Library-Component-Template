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

  // GetSubject():Observable<Subject[]>{
  //   return this.http.get<Subject[]>("http://localhost:3000/subjects");
  // }

  GetTeacher(){
     return this.http.post<{status:String,data:Teacher[]}>("http://localhost:8080/api/v1/",
    {
      action: 'all-teacher',
    }
    );
    // obsr.subscribe(
    //   value=> console.log(value)
      
    // )
    // return obsr;
  }

  // getAllTeachers():{
  //   return this.http.post<ApiResponse<Teacher[]>>(BASEURL,
  //     {
  //       "action": "all-teacher"
  //     },
  //     {headers:this.header});
  // }

  SaveTeacher(Teacher:any){
    return this.http.post("http://localhost:8080/api/v1",
    {
      action: 'add-teacher',
      data:Teacher
    });
  }
  // Saveteacher(data:any){
  //   return this.http.post<Teacher>(BASEURL,{
  //     "action": "add-teacher",
  //     "data": data
  //   })
  // }

  GetTeacherByID(code:any){
    return this.http.get("http://localhost:3000/customer"+code);
  }
}
