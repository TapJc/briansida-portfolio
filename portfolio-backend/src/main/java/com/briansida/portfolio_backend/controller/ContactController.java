package com.briansida.portfolio_backend.controller;

import com.briansida.portfolio_backend.dto.ContactRequest;
import com.briansida.portfolio_backend.service.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

// This class handles HTTP requests
@RestController
// All routes in this calls start with /api/contact
@RequestMapping("/api/contact")

// Configures CORS to permit requests from the React development and production clients
@CrossOrigin(origins = {
  "http://localhost:5173",
  "https://briansida.vercel.app"
}) 

public class ContactController {

  private final EmailService emailService;

  public ContactController(EmailService emailService) {
    this.emailService = emailService;
  }
  
  // Handles POST requests from the contact form and validates the submitted data
  @PostMapping
  public ResponseEntity<String> createContactRequest(@Valid @RequestBody ContactRequest request) {
    try {
      emailService.sendEmail(request);

      return ResponseEntity.ok("Email sent successfully");
    } catch (Exception e) {
      System.err.println("Email error: " + e.getMessage());
      return ResponseEntity.internalServerError().body("Failure to send email");
    }
  }
}
