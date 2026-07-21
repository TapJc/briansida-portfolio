package com.briansida.portfolio_backend.exception;

import java.util.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

// Handles exceptions thrown across all REST controllers
@RestControllerAdvice
public class GlobalExceptionHandler {
  
   // Handles validation failures caused by @Valid request objects
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<Map<String, String>> handleValidationErrors(
    MethodArgumentNotValidException ex) {

       // Stores validation errors as field name -> error message
      Map<String, String> errors = new HashMap<>();

      errors.put("type", "validation");

       // Extracts each validation error and adds it to the response map
      ex.getBindingResult()
        .getFieldErrors()
        .forEach(error -> 
          errors.put(error.getField(), error.getDefaultMessage()));

      // Returns a 400 response with validation errors as JSON
      return ResponseEntity.badRequest().body(errors);
  }
}
