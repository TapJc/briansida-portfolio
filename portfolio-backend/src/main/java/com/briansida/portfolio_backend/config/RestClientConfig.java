package com.briansida.portfolio_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.beans.factory.annotation.Value;

// Configuration class for creating and configuring application Beans
@Configuration
public class RestClientConfig {
  
  // Creates a RestClient Bean for making HTTP requests to the Resend API
  @Bean
  public RestClient restClient(@Value("${resend.base.url}") String baseUrl) {
    return RestClient.builder()
          .baseUrl(baseUrl)
          .build();
  }
}
