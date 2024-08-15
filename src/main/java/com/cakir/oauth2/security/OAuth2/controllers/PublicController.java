package com.cakir.oauth2.security.OAuth2.controllers;

import com.cakir.oauth2.security.OAuth2.dtos.MessageDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublicController {

    @GetMapping("/public/messages")
    public ResponseEntity<MessageDto> publicMessages(){
        return ResponseEntity.ok(new MessageDto("public content"));
    }
}
