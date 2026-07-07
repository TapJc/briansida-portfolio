package com.briansida.portfolio_backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;

// Represents the data received from the contact form
public class ContactRequest {
  // Contact form fields with validation requirements
  @NotBlank(message = "Name is required")
  private String name;

  @NotBlank(message = "Email is required")
  @Email(message = "Email must be valid")
  private String email;

  @NotBlank(message = "Subject is required")
  private String subject;

  @NotBlank(message = "Message is required")
  private String message;

  // Required for Spring/Jackson to convert JSON into this object
  public ContactRequest() {
  }

  // Allows creating a ContactRequest with existing values
  public ContactRequest(String name, String email, String subject, String message) {
    this.name = name;
    this.email = email;
    this.subject =  subject;
    this.message = message;
  }

  // Getters and Setters
  public String getName() {
    return name;
  }

  public String getEmail() {
    return email;
  }

  public String getSubject() {
    return subject;
  }

  public String getMessage() {
    return message;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setSubject(String subject) {
    this.subject = subject;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}
