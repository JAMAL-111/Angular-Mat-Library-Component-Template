import { Component, ViewChild } from '@angular/core';
import { Lesson } from '../Modal/Lesson';
import { LessonService } from '../service/lesson.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-table',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {
  lessonlist !: Lesson[];
  dataSource: any;
  displayedColumns:string[]=["id","teacher","subject","stream","action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: LessonService,private dialog: MatDialog){
   this.loadLesson();
  }

  //rereshing tables
  loadLesson(){
    this.service.GetLesson().subscribe(res =>{
      this.lessonlist = res;
      this.dataSource = new MatTableDataSource<Lesson>(this.lessonlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  Filterchange(data:Event){
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editLesson(code:any){
    //console.log(code);
    this.Openpopup(code, 'Edit Lesson');
  }

  addLesson(){
    this.Openpopup(0, 'Add L');
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
      this.loadLesson();
    })
  }
}
