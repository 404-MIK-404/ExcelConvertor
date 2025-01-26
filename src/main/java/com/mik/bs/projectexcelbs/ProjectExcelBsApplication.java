package com.mik.bs.projectexcelbs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;

@SpringBootApplication
@ComponentScan(basePackages = {"com.mik.bs.projectexcelbs", "com.mik.bs.bsexcelcore"})
public class ProjectExcelBsApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectExcelBsApplication.class, args);
    }

}
