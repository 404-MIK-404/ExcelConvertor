import {Injectable} from "@angular/core";
import {DataGridStateModel} from "../../domain/model/datagrid-state.model";
import {FetchDataGridUsecase} from "../../domain/usecase/fetch-data-grid.usecase";


@Injectable({
  providedIn: 'root'
})
export class AppViewModel {

  constructor(private fetchDataGridUsecase: FetchDataGridUsecase) {}

  public returnTestDataAndColumnCashPlanBp(): DataGridStateModel {
    return this.fetchDataGridUsecase.loadTestDataGridCashPlanBp()
  }

  public returnTestDataAndColumnCashPlanYear(): DataGridStateModel {
    return this.fetchDataGridUsecase.loadTestDataGridCashPlanYear()
  }

  public returnTestDataAndColumnCollege(): DataGridStateModel {
    return  this.fetchDataGridUsecase.loadTestDataGridCollege()
  }

}
