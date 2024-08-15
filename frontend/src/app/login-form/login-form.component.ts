import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MyHttpClientService } from '../my-http-client.service';
import { CommonModule } from '@angular/common';
import { Url } from 'url';
import { UrlMatcher } from '@angular/router';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginFormComponent implements OnInit {
  url : string = "";

  constructor(private http: MyHttpClientService){}

  ngOnInit(): void {
    this.http.get("/auth/url").subscribe((data:any) => {
      this.url = data.url;
    });
  }

}
