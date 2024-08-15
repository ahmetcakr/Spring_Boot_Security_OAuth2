package com.cakir.oauth2.security.OAuth2.config;

import org.springframework.beans.factory.annotation.Value;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
@RequiredArgsConstructor
public class WebClientConfig {

    @Value("@{spring.security.oauth2.resource-server.opaque-token.introspection-uri}")
    String introspectionUri;

    @Bean
    public WebClient userInfoClient(){
        return WebClient.builder().baseUrl(introspectionUri).build();
    }
}
