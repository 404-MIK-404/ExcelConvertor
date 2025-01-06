import {Injectable} from "@angular/core";
import {ExcelRepository} from "../repository/excel.repository";


@Injectable({
  providedIn: "root"
})
export class CashPlanAppExcelConvertorService {

  constructor(private excelRepository: ExcelRepository) {
  }

  public returnExcelFileConvertor(data: any[], params){
    return this.excelRepository.fetchDataConvertorToExcel(data,params)
  }


}
