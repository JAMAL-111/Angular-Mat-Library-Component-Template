import { Component, ViewChild } from '@angular/core';
import { Customer } from '../Modal/Customer';
import { MasterService } from '../service/master.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns:string[]=["code","name","email","phone","status","action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService,private dialog: MatDialog){
   this.loadcustomer();
  }

  //rereshing tables
  loadcustomer(){
    this.service.GetCustomer().subscribe(res =>{
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<Customer>(this.customerlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  Filterchange(data:Event){
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editcustomer(code:any){
    //console.log(code);
    this.Openpopup(code, 'Edit Teacher');
  }

  addCustomer(){
    this.Openpopup(0, 'Add Customer');
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
      this.loadcustomer();
    })
  }
}
