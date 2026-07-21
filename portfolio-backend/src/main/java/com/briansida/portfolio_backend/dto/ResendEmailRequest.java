package com.briansida.portfolio_backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

// Represents the email request format required by Resend's API
public class ResendEmailRequest {
  private String from;

  private String[] to;

  private String subject;

  private String html;

  @JsonProperty("reply_to")
  private String replyTo;

  public ResendEmailRequest(String from, String[] to, String subject, String html, String replyTo) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.html = html;
    this.replyTo = replyTo;
  }

  public String getFrom() {
    return from;
  }

  public String[] getTo() {
    return to;
  }

  public String getSubject() {
    return subject;
  }

  public String getHtml() {
    return html;
  }

  public String getReplyTo() {
    return replyTo;
  }
}
