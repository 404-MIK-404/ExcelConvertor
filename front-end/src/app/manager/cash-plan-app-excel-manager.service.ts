import {Injectable} from "@angular/core";
import {CashPlanAppExcelConvertorService} from "../service/cash-plan-app-excel-convertor.service";
import {Observable, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CashPlanAppExcelManagerService {

  public eventLoadConvertorDataToExcel$: Subject<any> = new Subject<any>();

  constructor(private cashPlanAppExcelConvertorService: CashPlanAppExcelConvertorService) {
  }

  public convertDataToExcel(data: any, params){
    this.cashPlanAppExcelConvertorService.returnExcelFileConvertor(data,params).subscribe({
      next: (value) => this.eventLoadConvertorDataToExcel$.next(value),
      error: (error) => console.error(error),
      complete: () => console.log('Complete')
    });

  }

}
