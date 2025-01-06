import DevExpress from "devextreme";
import {calculateGroupValue} from "../func/calculate-group.func";


export const cashPlanCollegeColumn: DevExpress.ui.dxDataGrid.Column[] = [
  {
    dataField: 'codePBS',
    caption: 'Код ПБС',
    allowSorting: true,
  },
  {
    dataField: 'name',
    caption: 'Наименование',
    allowSorting: true,
  },
]
