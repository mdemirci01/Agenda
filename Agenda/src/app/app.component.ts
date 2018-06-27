import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'app';
  private apiUrl = "https://localhost:44374/api/";
  todoItems: string[] = [];
  ngOnInit(): void {
    this.http.get(this.apiUrl + "values").subscribe(data => {
      this.todoItems = data as string[];
    });
  }
}
