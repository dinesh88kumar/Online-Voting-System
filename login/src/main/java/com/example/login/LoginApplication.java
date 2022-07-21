package com.example.login;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class LoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginApplication.class, args);
	}
  @Bean
  public RestTemplate restTemplate() {
	  return new RestTemplate();
  }
  @Bean
	 public WebMvcConfigurer configure() {
	  return new WebMvcConfigurer() {
	   @Override
	   public void addCorsMappings(CorsRegistry reg) {
	    reg.addMapping("/**").allowedOrigins("*");
	   }
	  };
	  
	 }
}
