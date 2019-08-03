import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ua: User[];
  uo = new User();
  constructor(private hc: HttpClient) {
    this.hc.get('http://localhost:3000/users').subscribe(
      res => {
        console.log(res);
        this.ua = <User[]>res;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {}
}
