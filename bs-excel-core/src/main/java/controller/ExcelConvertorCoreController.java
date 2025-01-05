package controller;

import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/api/core/excel",produces = MediaType.APPLICATION_JSON_VALUE)
public class ExcelConvertorCoreController {


    @PostMapping(value = "/")
    public String convertorDataToExcel(){
        return "";
    }


}
