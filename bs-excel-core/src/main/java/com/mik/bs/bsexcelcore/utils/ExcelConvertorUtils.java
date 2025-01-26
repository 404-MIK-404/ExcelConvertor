package com.mik.bs.bsexcelcore.utils;


import org.apache.poi.ss.usermodel.Cell;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExcelConvertorUtils {

    public static String returnValueFromCellAsString(Cell cell, List<Cell> formuls) {
        return Optional.ofNullable(cell).map(val->{
            switch (cell.getCellType()) {
                case Cell.CELL_TYPE_STRING:
                    return cell.getStringCellValue().trim();
                case Cell.CELL_TYPE_NUMERIC :
                    return String.valueOf(cell.getNumericCellValue()).trim();
                case Cell.CELL_TYPE_BOOLEAN:
                    return String.valueOf(cell.getBooleanCellValue()).trim();
                case Cell.CELL_TYPE_FORMULA:
                    formuls.add(cell);
                    return cell.getCellFormula().trim();
                case Cell.CELL_TYPE_BLANK:
                default:
                    return "".trim();
            }
        }).orElse("".trim());
    }


    public static void copyCell(Cell oldCell, Cell newCell) {
        switch (oldCell.getCellType()) {
            case Cell.CELL_TYPE_STRING:
                newCell.setCellValue(oldCell.getStringCellValue());
                break;
            case Cell.CELL_TYPE_NUMERIC :
                newCell.setCellValue(oldCell.getNumericCellValue());
                break;
            case Cell.CELL_TYPE_BOOLEAN:
                newCell.setCellValue(oldCell.getBooleanCellValue());
                break;
            case Cell.CELL_TYPE_FORMULA:
                newCell.setCellFormula(oldCell.getCellFormula());
                break;
            case Cell.CELL_TYPE_BLANK:
            default:
                break;
        }
        Optional.ofNullable(oldCell.getCellStyle())
                .ifPresent(newCell::setCellStyle);
    }

}
