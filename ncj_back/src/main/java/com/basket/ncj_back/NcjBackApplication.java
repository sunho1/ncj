package com.basket.ncj_back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class NcjBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(NcjBackApplication.class, args);
    }

}
