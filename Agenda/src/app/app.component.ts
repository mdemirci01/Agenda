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
  todoLists: string[] = [];
  todoItems: string[] = [];
  ngOnInit(): void {
    this.http.get(this.apiUrl + "todoItems").subscribe(data => {
      this.todoItems = data as string[];
    });

    this.http.get(this.apiUrl + "todoLists").subscribe(data => {
      this.todoLists = data as string[];
    });
  }
}
