package com.cakir.oauth2.security.OAuth2.controllers;

import com.cakir.oauth2.security.OAuth2.dtos.MessageDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrivateController {

    @GetMapping("/messages")
    public ResponseEntity<MessageDto> messages(@AuthenticationPrincipal(expression = "name") String name){
        return ResponseEntity.ok(new MessageDto("private content" + name));
    }
}
