import { Component, ViewChild } from '@angular/core';
import { Teacher } from '../Modal/Teacher';
import { TeacherService } from '../service/teacher.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  teacherlist !: Teacher[];
  dataSource: any;
  displayedColumns:string[]=["id","firstName","middleName","lastName","phoneNumber","dateOfBirth","gender","action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: TeacherService,private dialog: MatDialog){
   this.loadteacher();
  }

  //rereshing tables
  loadteacher(){
    this.service.GetTeacher().subscribe(res =>{
      console.log(res.data);
      this.teacherlist = res.data;
      this.dataSource = new MatTableDataSource<Teacher>(this.teacherlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  Filterchange(data:Event){
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editTeacher(code:any){
    //console.log(code);
    this.Openpopup(code, 'Edit Teacher');
  }

  addTeacher(){
    this.Openpopup(0, 'Add Teacher');
  }

  Openpopup(code:any,title:any){
    var _popup = this.dialog.open(PopupComponent,{
      width: '40%',
      enterAnimationDuration: '1000ms', //time the modal takes while popping up
      exitAnimationDuration: '1000ms', //time that the modal takes to fade out
      //passing data from the table to the modal
      data:{
        title:title,
        code:code
      }
    });
    //after pop up is closed
    _popup.afterClosed().subscribe(item=>{
      //console.log(item);
      this.loadteacher();
    })
  }
}
