import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {from, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ExcelRepository {

  private static URL = "http://localhost:8080/api/core/excel"

  constructor(private httpClient: HttpClient) {
  }

  public fetchDataConvertorToExcel(data: any[], params: any[]){
    return "";
    //return this.httpClient.post(`${ExcelRepository.URL}/`,{data: data,params: params})
  }

}
