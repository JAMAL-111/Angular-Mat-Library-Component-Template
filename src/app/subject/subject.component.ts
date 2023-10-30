import { Component, ViewChild } from '@angular/core';
import { Subject } from '../Modal/Subject';
import { SubjectService } from '../service/subject.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  subjectlist !: Subject[];
  dataSource: any;
  displayedColumns:string[]=["id","name","description","action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: SubjectService,private dialog: MatDialog){
   this.loadsubject();
  }

  //rereshing tables
  loadsubject(){
    this.service.GetSubject().subscribe(res =>{
      this.subjectlist = res;
      this.dataSource = new MatTableDataSource<Subject>(this.subjectlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  Filterchange(data:Event){
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editSubject(code:any){
    //console.log(code);
    this.Openpopup(code, 'Edit Subject');
  }

  addSubject(){
    this.Openpopup(0, 'Add Subject');
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
      this.loadsubject();
    })
  }
}
