import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  private apiUrl = "https://localhost:44374/api/";
  title = 'Agenda';
  todoItems: string[] = [];
   ngOnInit() {
      this.http.get(this.apiUrl + 'values').subscribe(values => {
         this.todoItems = values as string[];
      });
   }
}
