package com.mik.bs.bsexcelcore.controller;

import com.mik.bs.bsexcelcore.model.ExcelConvertorModel;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.io.IOException;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/api/core/excel",produces = MediaType.APPLICATION_JSON_VALUE)
public class ExcelConvertorCoreController {


    @PostMapping(value = "/")
    public String convertorDataToExcel(@RequestBody ExcelConvertorModel excelConvertorModel){
        return "";
    }

}
