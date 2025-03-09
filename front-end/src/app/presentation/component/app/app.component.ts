import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import DevExpress from "devextreme";
import {DataGridStateModel} from "../../../domain/model/datagrid-state.model";
import {AppViewModel} from "../../viewmodel/app.viewmodel";
import {LibBsReportService} from "@404-mik-404/lib-bs-report";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private events = new Subscription();

  public selectedIndex = 0;

  public sidebarVisible: boolean = false

  public dataGridApp: DataGridStateModel = {
    data: [],
    columns: [],
  }

  constructor(private appViewModel :AppViewModel,
              private libBsReportService: LibBsReportService) {}


  public onTabChanged(e: any) {
    this.selectedIndex = e.component.option('selectedIndex')
    this.loadTestDataAndColumnsBySelectedIndexTabPanel()
  }

  ngOnDestroy(): void {
    this.events.unsubscribe()
  }

  ngOnInit(): void {
    this.libBsReportService.onClickRefreshButton$.subscribe(()=>{
      console.log("Refresh Click !")
    })
    this.libBsReportService.onClickConvertExcelButton$.subscribe(()=>{
      console.log("Excel Convertor click !")
    })
    this.libBsReportService.onChangedSelectionReportDate$.subscribe(onSelectDateReport=>{
      console.log("Выбрал такую дату !" + onSelectDateReport.displayDate)
    })
    this.loadTestDataAndColumnsBySelectedIndexTabPanel()
  }


  public onClickVisibleSidebar(component: any){
    this.sidebarVisible = !this.sidebarVisible
  }


  private loadTestDataAndColumnsBySelectedIndexTabPanel(): void {
    switch (this.selectedIndex){
      case 0:
        this.dataGridApp = this.appViewModel.returnTestDataAndColumnCashPlanBp()
        break
      case 1:
        this.dataGridApp = this.appViewModel.returnTestDataAndColumnCashPlanYear()
        break
      case 2:
        this.dataGridApp = this.appViewModel.returnTestDataAndColumnCollege()
        this.pushColumnsForCollege()
        break
    }
    //this.libBsReportService.onLoadColumnReport(this.dataGridApp.columns)
  }

  private pushColumnsForCollege(){
    let columnCollege: DevExpress.ui.dxDataGrid.Column[] = JSON.parse(JSON.stringify(this.dataGridApp.columns))
    Array.from(['149 0704 02 4 02 90059 242','111 1111 11 1 11 11111 111','149 0704 02 4 02 90071 247','149 0704 02 4 02 90071 244']).forEach((kbk: string)=>{
      columnCollege.push(  {
        dataField: kbk,
        caption: kbk,
        allowSorting: true,
      },)
    })
    this.dataGridApp.columns = columnCollege
  }

}
