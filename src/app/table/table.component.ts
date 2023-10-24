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
    this.service.GetCustomer().subscribe(res =>{
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<Customer>(this.customerlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  Filterchange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }

  Openpopup(){
    this.dialog.open(PopupComponent,{
      width: '60%',
      height: '400px'
    })
  }
}
