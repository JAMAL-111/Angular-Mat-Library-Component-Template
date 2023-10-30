import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorentity } from '../Entity/colorentity';
import { Lesson } from '../Modal/Lesson';
@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http:HttpClient) { 

  }

  GetLesson():Observable<Lesson[]>{
    return this.http.get<Lesson[]>("http://localhost:3000/lessons");
  }

  SaveLesson(data:any){
    return this.http.post("http://localhost:3000",data);
  }
}
