package com.mik.bs.projectexcelbs.controller;

import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/api/hello",produces = MediaType.APPLICATION_JSON_VALUE)
public class ProjectExcelBsController {

    @GetMapping(value = "/")
    public ResponseEntity<String> getHello(HttpServletResponse response){
        HttpHeaders responseHeaders = new HttpHeaders();
        //responseHeaders.add("MIK","PAPA");
        //responseHeaders.add("Location", "https://www.vtb.ru/");

        /*
        return ResponseEntity.status(HttpStatus.FOUND)
                .headers(responseHeaders)
                .build();

         */
        return ResponseEntity.status(HttpStatus.OK)
                .headers(responseHeaders)
                .body("Hello from MIK !");
        /*
        return ResponseEntity.status(HttpStatus.FOUND)
                .headers(responseHeaders)
                .build();

         */

    }

    @GetMapping(value = "/test/redirect-hello")
    public String testRedirect(){
        return "hello-from-redirect";
    }


}
