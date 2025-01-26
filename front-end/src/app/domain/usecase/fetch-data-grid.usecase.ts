import {Injectable} from "@angular/core";
import {DataGridStateModel} from "../model/datagrid-state.model";
import {cashPlanBpColumn} from "../column/cash-plan-bp.column";
import {cashPlanYearColumn} from "../column/cash-plan-year.column";
import {cashPlanCollegeColumn} from "../column/cash-plan-college.column";
import {CashPlanBpData} from "../data/cash-plan-bp.data";
import {cashPlanCollegeData} from "../data/cash-plan-college.data";
import {cashPlanYearData} from "../data/cash-plan-year.data";


@Injectable({
  providedIn: 'platform'
})
export class FetchDataGridUsecase {

  constructor() {}


  public loadTestDataGridCashPlanBp(): DataGridStateModel {
    return {
      data: CashPlanBpData,
      columns: cashPlanBpColumn
    };
  }

  public loadTestDataGridCashPlanYear(): DataGridStateModel {
    return {
      data: cashPlanYearData,
      columns: cashPlanYearColumn
    }
  }

  public loadTestDataGridCollege(): DataGridStateModel {
    return {
      data: cashPlanCollegeData,
      columns: cashPlanCollegeColumn
    }
  }


}
