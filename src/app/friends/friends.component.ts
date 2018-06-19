import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getFriends();
  }

  getFriends(): void {
    this.userService.getUsers().subscribe(friends => this.friends = friends);
  }

}
