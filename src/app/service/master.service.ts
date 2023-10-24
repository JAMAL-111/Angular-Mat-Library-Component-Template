import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorentity } from '../Entity/colorentity';
import { Customer } from '../Modal/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  GetColorList():colorentity[]{
    return[
      {code:'c0', name:'black'},
      {code:'c1', name:'Red'},
      {code:'c2', name:'Green'},
      {code:'c3', name:'Yellow'},
      {code:'c4', name:'White'}
    ]
  }

  GetCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:3000/customer");
  }
}
