package com.briansida.portfolio_backend.service;

import com.briansida.portfolio_backend.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

// Handles the logic for creating and sending contact emails
@Service
public class EmailService {
  // Spring bean responsible for sending emails through the configured SMTP server
  private final JavaMailSender mailSender;
  private final String mailUsername;

  public EmailService(
      JavaMailSender mailSender, 
      // Sender email loaded from application.properties / environment variables
      @Value("${spring.mail.username}") String mailUsername
    ) {
      this.mailSender = mailSender;
      this.mailUsername = mailUsername;
  }

  // Converts contact form data into an email and sends it
  public void sendEmail(ContactRequest request) {
    SimpleMailMessage message = new SimpleMailMessage();
    
    message.setFrom(mailUsername);
    message.setTo(mailUsername);
    message.setReplyTo(request.getEmail());
    
    message.setSubject(request.getSubject());

    message.setText(
      "Name: " + request.getName() + 
      "\nEmail: " + request.getEmail() +
      "\n\nMessage: \n" + request.getMessage()
    );

    mailSender.send(message);
  }
}
