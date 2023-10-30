import { Component, ViewChild } from '@angular/core';
import { Stream } from '../Modal/Stream';
import { StreamService } from '../service/stream.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-subject',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent {
  streamlist !: Stream[];
  dataSource: any;
  displayedColumns:string[]=["id","name","classTeacher","action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: StreamService,private dialog: MatDialog){
   this.loadStream();
  }

  //rereshing tables
  loadStream(){
    this.service.GetStream().subscribe(res =>{
      this.streamlist = res;
      this.dataSource = new MatTableDataSource<Stream>(this.streamlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  FilterChange(data:Event){
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editStream(code:any){
    //console.log(code);
    this.Openpopup(code, 'Edit Stream');
  }

  addStream(){
    this.Openpopup(0, 'Add Stream');
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
      this.loadStream();
    })
  }
}
