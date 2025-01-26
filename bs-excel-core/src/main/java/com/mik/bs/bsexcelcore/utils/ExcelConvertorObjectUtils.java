package com.mik.bs.bsexcelcore.utils;


import org.springframework.stereotype.Service;

@Service
public class ExcelConvertorObjectUtils {

    public static Object invokeGetter(Object target, String methodName) {
        try {
            return target.getClass().getMethod(methodName).invoke(target);
        } catch (Exception e) {
            throw new RuntimeException("Ошибка при вызове метода " + methodName, e);
        }
    }

    public static void invokeSetter(Object target, String methodName, Object value) {
        try {
            target.getClass().getMethod(methodName, Object.class).invoke(target, value);
        } catch (Exception e) {
            throw new RuntimeException("Ошибка при вызове метода " + methodName, e);
        }
    }

}
