import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeSlot } from '../Modal/TimeSlot';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeslotService {

  constructor(private http:HttpClient) { 

  }

  GetTimeSlot():Observable<TimeSlot[]>{
    return this.http.get<TimeSlot[]>("http://localhost:3000/timeslots");
  }

  SaveTimeSlot(data:any){
    return this.http.post("http://localhost:3000/timeslots",data);
  }

}
