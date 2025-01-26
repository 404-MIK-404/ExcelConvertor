package com.mik.bs.bsexcelcore.service;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.CellReference;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import com.mik.bs.bsexcelcore.utils.ExcelConvertorObjectUtils;
import com.mik.bs.bsexcelcore.utils.ExcelConvertorUtils;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
public class ExcelConvertorService {
    private List<Cell> formulaCells = new ArrayList<>();

    public byte[] convertDataToExcel(InputStream fileExcelPattern, List<?> data, String finYear) throws IOException {
        Workbook workbook = new XSSFWorkbook(fileExcelPattern);
        int numberOfSheets = workbook.getNumberOfSheets();
        formulaCells.clear();
        for (int i = 0; i < numberOfSheets; i++){
            Sheet sheet = workbook.getSheetAt(i);
            if (sheet.getPhysicalNumberOfRows() > 0) {
                addData(sheet,data,finYear);
            }
        }
        return createFileExcel(workbook,fileExcelPattern);
    }


    private void addData(Sheet sheet, List<?> data,String finYear){
        Integer indDataLoad = null;
        Integer indFooterLoad = null;
        Integer indFooterLoadEnd = null;
        for (Row row : sheet) {
            for (Cell cell : row) {
                String cellValue = ExcelConvertorUtils.returnValueFromCellAsString(cell,formulaCells);
                if (!cellValue.isEmpty()) {
                    if (cellValue.contains("finYear")){
                        cell.setCellValue(cellValue.replace("finYear",finYear + "."));
                    } else if (cellValue.contains("unitRub")){
                        cell.setCellValue(cellValue.replace("unitRub","тыс.руб."));
                    } else if (cellValue.contains("data:begin")) {
                        indFooterLoad = row.getRowNum() + 2;
                        indDataLoad = row.getRowNum();
                    } else if (cellValue.contains("footer:end")) {
                        indFooterLoadEnd = row.getRowNum();
                        break;
                    }
                }
            }
            if (indFooterLoadEnd != null) {
                break;
            }
        }
        if (indFooterLoad != null && indFooterLoadEnd != null && indDataLoad != null) {
            int rowsToCopy = indFooterLoadEnd - indFooterLoad;
            this.copyRows(sheet, indFooterLoad, indFooterLoadEnd + data.size(), rowsToCopy);
            this.copyRows(sheet, indDataLoad - 1, indDataLoad, data.size() - 1);
        }

        for (int i = 0; i < data.size(); i++){
            Row row = sheet.getRow(i + indDataLoad - 1);
            Object reportRow = data.get(i);
            for (Cell cell : row) {
                String cellValue = ExcelConvertorUtils.returnValueFromCellAsString(cell,formulaCells);
                Object value = ExcelConvertorObjectUtils.invokeGetter(reportRow,"get" + cellValue);
                if (value instanceof BigDecimal){
                    BigDecimal decimalValue = (BigDecimal) value;
                    cell.setCellValue(decimalValue.doubleValue());
                } else {
                    cell.setCellValue((String) value);
                }
            }
        }
        Integer indData = indDataLoad - 1;
        formulaCells.forEach(cell->{
            String formula = cell.getCellFormula();
            if (formula.contains("data.index.begin")){
                Row rowBeginData = sheet.getRow(indData);
                Cell cellBeginDate = rowBeginData.getCell(cell.getColumnIndex());
                String cellAddress = new CellReference(cellBeginDate.getRowIndex(), cellBeginDate.getColumnIndex()).formatAsString();
                formula = formula.replace("data.index.begin", cellAddress);
            }
            if (formula.contains("data.index.end")){
                Row rowEndData = sheet.getRow(indData + (data.size() - 1));
                Cell cellBeginDate = rowEndData.getCell(cell.getColumnIndex());
                String cellAddress = new CellReference(cellBeginDate.getRowIndex(), cellBeginDate.getColumnIndex()).formatAsString();
                formula = formula.replace("data.index.end", cellAddress);
            }
            cell.setCellFormula(formula);
        });

    }



    private void copyRows(Sheet sheet, int sourceRowStartIndex, int targetRowStartIndex, int numberOfRows) {
        for (int i = 0; i < numberOfRows; i++) {
            int sourceRowIndex = sourceRowStartIndex + i;
            int targetRowIndex = targetRowStartIndex + i;
            copyRow(sheet, sourceRowIndex, targetRowIndex);
            List<CellRangeAddress> mergedRegionsInRow = getMergedRegionsInRow(sheet, sourceRowIndex);
            copyMergedRegions(mergedRegionsInRow,sheet,sourceRowIndex,targetRowIndex);
        }
    }

    private void copyRow(Sheet sheet, int sourceRowIndex, int targetRowIndex) {
        Row sourceRow = sheet.getRow(sourceRowIndex);
        if (sourceRow == null) {
            sourceRow = sheet.createRow(targetRowIndex);
        }
        Row newRow = sheet.createRow(targetRowIndex);
        for (int i = 0; i < sourceRow.getLastCellNum(); i++) {
            Cell oldCell = sourceRow.getCell(i);
            if (oldCell != null) {
                Cell newCell = newRow.createCell(i);
                ExcelConvertorUtils.copyCell(oldCell, newCell);
            }
        }
    }

    private static List<CellRangeAddress> getMergedRegionsInRow(Sheet sheet, int rowIndex) {
        List<CellRangeAddress> mergedRegionsInRow = new ArrayList<>();
        for (int i = 0; i < sheet.getNumMergedRegions(); i++) {
            CellRangeAddress mergedRegion = sheet.getMergedRegion(i);
            if (mergedRegion.getFirstRow() <= rowIndex && mergedRegion.getLastRow() >= rowIndex) {
                mergedRegionsInRow.add(mergedRegion);
            }
        }
        return mergedRegionsInRow;
    }

    private void copyMergedRegions(List<CellRangeAddress> cellRangeAddresses,Sheet sheet, int sourceRowIndex, int targetRowIndex) {
        for (CellRangeAddress mergedRegion: cellRangeAddresses) {
            if (mergedRegion.getFirstRow() <= sourceRowIndex && mergedRegion.getLastRow() >= sourceRowIndex) {
                CellRangeAddress newMergedRegion = new CellRangeAddress(
                        mergedRegion.getFirstRow() - sourceRowIndex + targetRowIndex,
                        mergedRegion.getLastRow() - sourceRowIndex + targetRowIndex,
                        mergedRegion.getFirstColumn(),
                        mergedRegion.getLastColumn()
                );
                sheet.addMergedRegion(newMergedRegion);
                removeMergedRegionsInRow(sheet,sourceRowIndex);
            }
        }
    }

    private void removeMergedRegionsInRow(Sheet sheet, int rowIndex) {
        for (int i = sheet.getNumMergedRegions() - 1; i >= 0; i--) {
            CellRangeAddress region = sheet.getMergedRegion(i);
            if (region.getFirstRow() == rowIndex) {
                sheet.removeMergedRegion(i); // Удаляем область
            }
        }
    }

    private byte[] createFileExcel(Workbook workbook,InputStream fileExcelPattern) throws IOException{
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        workbook.write(byteArrayOutputStream);
        fileExcelPattern.close();
        return byteArrayOutputStream.toByteArray();
    }

}
