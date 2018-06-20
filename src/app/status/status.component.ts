import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { User } from '../user';
import { UserPostService } from '../user-post.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  statusText = '';
  currentUser: User = { id: 999, displayName: 'Jon Welzel', avatar: '/assets/jon_welzel.jpg' };

  constructor(private userPostService: UserPostService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('ayyy');
    if (!this.statusText.trim().length) {
      return;
    }

    const newFeedPost: Post = {id: Date.now(), user: this.currentUser, text: this.statusText.trim(), timestamp: new Date() };
    this.userPostService.addPost(newFeedPost);
    this.statusText = '';
  }

}
