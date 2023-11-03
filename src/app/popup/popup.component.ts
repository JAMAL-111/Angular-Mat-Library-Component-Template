import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeacherService } from '../service/teacher.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  inputdata:any;
  editdata:any;
  closemessage='Closed willingly' //component binding
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<PopupComponent>, 
  private builder:FormBuilder,
  private service:TeacherService, private datePipe:DatePipe){

  }

  ngOnInit(): void{
    this.inputdata=this.data;
    if(this.inputdata.code>0){
      this.setpopupdata(this.inputdata.code)
    }
  }

  setpopupdata(code:any){
    this.service.GetTeacherByID(code).subscribe(item=>{
    this.editdata=item;
    this.myform.setValue({
      email: this.editdata.email,
      firstName: this.editdata.firstName,
      middleName: this.editdata.middleName,
      lastName: this.editdata.lastName,
      phoneNumber: this.editdata.phoneNumber,
      dateOfBirth: this.editdata.dateOfBirth,
      //gender: this.editdata.gender,
      status: this.editdata.status
    })
    });
  }
  
  closepopup(){
    //displays close when the modal is closed
    this.ref.close("Closed");
  }

  myform=this.builder.group({
    firstName:this.builder.control(''),
    middleName: this.builder.control(''),
    lastName: this.builder.control(''),
    email:this.builder.control(''),
    phoneNumber:this.builder.control(''),
    dateOfBirth: this.builder.control('yyyy-MM-dd'),
    //gender: this.builder.control(''),
    status:this.builder.control('true'),
  })

  // SaveTeacher(){
  //   //console.log(this.myform.value);
  //   this.service.SaveTeacher(this.myform.value).subscribe(res=>{
  //     this.closepopup();
  //     console.log(this.myform.value(dateOfBirth));
  //   })
  // }

  SaveTeacher() {
    if (this.myform) {
      // Format the dateOfBirth field before saving it
      const dateOfBirthControl = this.myform.get('dateOfBirth');
      
      if (dateOfBirthControl) {
        const formattedDateOfBirth = this.datePipe.transform(dateOfBirthControl.value, 'yyyy-MM-dd');
        dateOfBirthControl.setValue(formattedDateOfBirth);
      }
  
      this.service.SaveTeacher(this.myform.value).subscribe(res => {
        this.closepopup();
      });
    }
  }
}
