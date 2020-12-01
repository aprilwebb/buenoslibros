import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-api-service',
  templateUrl: './api-service.component.html',
  styleUrls: ['./api-service.component.css']
})
export class ApiServiceComponent implements OnInit {
  key = "AIzaSyCzLSuRqMy_aD0DnpkddJpRSxfmo_OGbNA";

  constructor(private httpClient: HttpClient) { }
  get(queryField: string) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=50&keyes&key=${this.key}`
    );
  }

  ngOnInit() {
  }

}
