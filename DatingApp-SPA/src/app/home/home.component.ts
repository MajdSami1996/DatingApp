import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  regsiterMode = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  registerToggle() {
    this.regsiterMode = true;
  }

  cancelRegisterMode(regsiterMode: boolean) {
    this.regsiterMode = regsiterMode;
  }
}
