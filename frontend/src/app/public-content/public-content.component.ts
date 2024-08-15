import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyHttpClientService } from '../my-http-client.service';
import { Message } from '../message';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-public-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './public-content.component.html',
  styleUrl: './public-content.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicContentComponent implements OnInit {
  content : string = "";

  constructor(private http:MyHttpClientService){

  }

  ngOnInit(): void {
    this.http.get("/public/messages").subscribe((data:Message) => {
      this.content = data.message;
    });
  }
}
