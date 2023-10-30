import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  inputdata:any;
  editdata:any;
  closemessage='Closed willingly' //component binding
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<PopupComponent>, private builder:FormBuilder,
  private service:MasterService){

  }

  ngOnInit(): void{
    this.inputdata=this.data;
    if(this.inputdata.code>0){
      this.setpopupdata(this.inputdata.code)
    }
  }

  setpopupdata(code:any){
    this.service.GetCustomerbycode(code).subscribe(item=>{
    this.editdata=item;
    this.myform.setValue({name:this.editdata.name,email:this.editdata.email,phone:this.editdata.phone,status:this.editdata.status})
    });
  }
  
  closepopup(){
    //displays close when the modal is closed
    this.ref.close("Closed");
  }

  myform=this.builder.group({
    name:this.builder.control(''),
    email:this.builder.control(''),
    phone:this.builder.control(''),
    status:this.builder.control('true'),
  })

  SaveTeacher(){
    //console.log(this.myform.value);
    this.service.Savecustomer(this.myform.value).subscribe(res=>{
      this.closepopup();
    });
  }
}
