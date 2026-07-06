package com.briansida.portfolio_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// This class handles HTTP requests and automatically converts return values to JSON
@RestController
// All routes in this calls start with /api/contact
@RequestMapping("/api/contact")
// Allows your frontend to call this API without being blocked by the browser's security
@CrossOrigin(origins = "*")
public class ContactController {
  
}
