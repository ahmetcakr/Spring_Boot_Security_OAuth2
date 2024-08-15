import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyHttpClientService } from '../my-http-client.service';
import { Message } from '../message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-private-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './private-content.component.html',
  styleUrl: './private-content.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrivateContentComponent implements OnInit {
  content : string = "";

  constructor(private http:MyHttpClientService){}

  ngOnInit(): void {
    this.http.getPrivate("/messages").subscribe((data:Message) => {
      this.content = data.message;
    });
  }
}
