import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ExcelRepository {

  private static URL = "localhost:8080/api/core/excel"

  constructor(private httpClient: HttpClient) {
  }
  
  public fetchDataConvertorToExcel(data: any[], params){
    return this.httpClient.post(`${ExcelRepository.URL}/`,{data: data,params: params})
  }

}
