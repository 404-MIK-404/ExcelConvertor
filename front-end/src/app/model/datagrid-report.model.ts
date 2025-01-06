import DevExpress from "devextreme";


export class DataGridReportModel {

  private _data: any[];
  private _columns: DevExpress.ui.dxDataGrid.Column[];

  constructor(data: any[], columns: DevExpress.ui.dxDataGrid.Column[]) {
    this._data = data;
    this._columns = columns;
  }

  // Геттер для data
  get data(): any[] {
    return this._data;
  }

  // Сеттер для data
  set data(value: any[]) {
    this._data = value;
  }

  // Геттер для columns
  get columns(): DevExpress.ui.dxDataGrid.Column[] {
    return this._columns;
  }

  // Сеттер для columns
  set columns(value: DevExpress.ui.dxDataGrid.Column[]) {
    this._columns = value;
  }
}

