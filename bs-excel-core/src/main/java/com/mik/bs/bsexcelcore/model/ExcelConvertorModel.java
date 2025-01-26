package com.mik.bs.bsexcelcore.model;


import lombok.Data;

import java.util.HashMap;
import java.util.List;

@Data
public class ExcelConvertorModel {

    private List<?> data;

    private HashMap<String,Object> params;

}
