import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {DataGridReportModel} from "./model/datagrid-report.model";
import {cashPlanBpColumn} from "./column/cash-plan-bp.column";
import {cashPlanYearColumn} from "./column/cash-plan-year.column";
import {cashPlanCollegeColumn} from "./column/cash-plan-college.column";
import DevExpress from "devextreme";
import {Sidebar, SidebarModule} from "primeng/sidebar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private events = new Subscription();

  public selectedIndex = 0;

  public sidebarVisible: boolean = false

  public dataGridCashPlanBp: DataGridReportModel  = new DataGridReportModel([],cashPlanBpColumn)

  public dataGridCashPlanYear: DataGridReportModel = new DataGridReportModel([],cashPlanYearColumn)

  public dataGridCashPlanCollege: DataGridReportModel = new DataGridReportModel([],cashPlanCollegeColumn)

  dataSource = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
  ];

  columns = [
    { dataField: 'id', caption: 'ID' },
    { dataField: 'name', caption: 'Name' },
    { dataField: 'age', caption: 'Age' }
  ];

  constructor() {}


  public onTabChanged(e: any) {
    this.selectedIndex = e.component.option('selectedIndex')
  }

  ngOnDestroy(): void {
    this.events.unsubscribe()
  }

  ngOnInit(): void {
    let columnCollege: DevExpress.ui.dxDataGrid.Column[] = JSON.parse(JSON.stringify(this.dataGridCashPlanCollege.columns))
    Array.from(['149 0704 02 4 02 90059 242','111 1111 11 1 11 11111 111','149 0704 02 4 02 90071 247','149 0704 02 4 02 90071 244']).forEach((kbk: string)=>{
      columnCollege.push(  {
        dataField: kbk,
        caption: kbk,
        allowSorting: true,
      },)
    })
    this.dataGridCashPlanCollege.columns = columnCollege
  }


  public onClickVisibleSidebar(component: any){
    this.sidebarVisible = !this.sidebarVisible
  }


}
