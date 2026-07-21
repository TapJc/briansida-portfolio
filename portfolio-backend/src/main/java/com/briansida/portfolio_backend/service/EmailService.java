package com.briansida.portfolio_backend.service;

import com.briansida.portfolio_backend.dto.ContactRequest;
import com.briansida.portfolio_backend.dto.ResendEmailRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

// Handles creating contact emails and sending them through Resend's API
@Service
public class EmailService {
  private final RestClient restClient;

  // Resend API credentials and email configuration
  private final String apiKey;
  private final String fromEmail;
  private final String portfolioEmail;

  public EmailService(
      RestClient restClient,
      @Value("${resend.api.key}") String apiKey,
      @Value("${resend.from}") String fromEmail,
      @Value("${portfolio.email}") String portfolioEmail
  ) {
    this.restClient = restClient;
    this.apiKey = apiKey;
    this.fromEmail = fromEmail;
    this.portfolioEmail = portfolioEmail;
  }

  // Builds the email request and sends it to Resend
  public void sendEmail(ContactRequest request) {
    ResendEmailRequest email = new ResendEmailRequest(
        fromEmail,
        new String[]{portfolioEmail}, 
        request.getSubject(), 
        request.getMessage(),
        request.getEmail()
    );

    // Sends POST request to Resend's email endpoint
    String response = restClient.post()
            .uri("/emails")
            // Authenticates request using Resend API key
            .header(
              "Authorization", 
              "Bearer " + apiKey
            )
            // Converts email object into JSON request body
            .contentType(MediaType.APPLICATION_JSON)
            .body(email)
            // Executes request and retrieves response
            .retrieve()
            .body(String.class);
            
      System.out.println(response);
  }
}
