package service;


import model.ExcelConvertorModel;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;

@Service
public class ExcelConvertorCoreService {

    private final ClassLoader classLoader = this.getClass().getClassLoader();

    private final String PATH_EXCEL_PATTERN_CASH_PLAN_BP = "excel/Report_Cash_Plan_BP_Pattern.xlsx";

    private final String PATH_EXCEL_PATTERN_CASH_PLAN_YEAR = "excel/Report_Cash_Plan_Year_Pattern.xlsx";

    private ExcelConvertorService excelConvertorService;

    public byte[] exportCashPlanYearToExcel(ExcelConvertorModel excelConvertorModel) throws IOException {
        return excelConvertorService.convertDataToExcel(findFile(PATH_EXCEL_PATTERN_CASH_PLAN_YEAR),excelConvertorModel.getData(),"");
    }

    public byte[] exportCashPlanBpToExcel(ExcelConvertorModel excelConvertorModel) throws IOException{
        return excelConvertorService.convertDataToExcel(findFile(PATH_EXCEL_PATTERN_CASH_PLAN_YEAR),excelConvertorModel.getData(),"");
    }

    private InputStream findFile(String filePath){
        return classLoader.getResourceAsStream(filePath);
    }

}
