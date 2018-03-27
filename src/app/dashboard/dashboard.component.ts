import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(private userSrv: UserService) { }

  username = this.userSrv.user.username;
  // " Welcome to " + this.userSrv.user.username + "  's page!";

  ngOnInit() {
  }

}
