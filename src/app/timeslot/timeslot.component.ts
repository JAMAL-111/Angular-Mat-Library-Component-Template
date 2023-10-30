import { Component, ViewChild } from '@angular/core';
import { Subject } from '../Modal/Subject';
import { TimeslotService } from '../service/timeslot.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { TimeSlot } from '../Modal/TimeSlot';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent {
  timeslotlist !: TimeSlot[];
  dataSource: any;
  displayedColumns:string[]=["id","day","startTime","endTime","action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: TimeslotService,private dialog: MatDialog){
   this.loadTimeSlot();
  }

  //rereshing tables
  loadTimeSlot(){
    this.service.GetTimeSlot().subscribe(res =>{
      this.timeslotlist = res;
      this.dataSource = new MatTableDataSource<TimeSlot>(this.timeslotlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  FilterChange(data:Event){
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editTimeSlot(code:any){
    //console.log(code);
    this.Openpopup(code, 'Edit Subject');
  }

  addTimeSlot(){
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
      this.loadTimeSlot();
    })
  }
}
