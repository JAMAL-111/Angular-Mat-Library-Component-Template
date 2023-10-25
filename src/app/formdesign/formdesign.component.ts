import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css']
})
export class FormdesignComponent {
  countrylist = ['Uganda','Kenya','Tanzania']

  constructor(private builder:FormBuilder){

  }

  // ngOnInit(): void {
  //   this.customerform.setValue({name:'Kasule Jamal Lukenge',email:'jamalkasule123@gmail.com',phone:'0753073101',
  //   country:'Uganda',address:'Kyanja',doB:new Date(2009,2,3),gender:'Male',status:true})
  // }

  //form validation happens here
  customerform=this.builder.group({
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.required])), //when you want to use more than one validations
    phone:this.builder.control('',Validators.required),
    country:this.builder.control('',Validators.required),
    address:this.builder.control('',Validators.required),
    doB:this.builder.control(new Date()),
    gender:this.builder.control('Male'),
    description:this.builder.control('',Validators.required),
    status:this.builder.control(true),
  });

  SaveCustomer(){
    console.log(this.customerform.value);
  }

  clearform(){
    this.customerform.reset();
  }
}
