package com.mpk.samples.SpringReactUI.configuration;

import com.mpk.samples.SpringReactUI.feign.StudentsClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@EnableFeignClients(basePackageClasses = { StudentsClient.class })
@Configuration
public class EnableFeignClientsConfiguration {

}