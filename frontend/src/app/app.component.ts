import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyHttpClientService } from './my-http-client.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from "./login-form/login-form.component";
import { PublicContentComponent } from "./public-content/public-content.component";
import { PrivateContentComponent } from "./private-content/private-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule, HttpClientModule, LoginFormComponent, PublicContentComponent, PrivateContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  componentToShow: string = "public";

  constructor(private http: MyHttpClientService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      if (params["code"] !== undefined) {
        this.http.getToken(params["code"]).subscribe(result =>{
          if(result == true){
            this.componentToShow = "private";
          } else {
            this.componentToShow = "public";
          }
        })
      }
    });
  }


}
