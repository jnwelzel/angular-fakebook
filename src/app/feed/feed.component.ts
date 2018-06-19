import { Component, OnInit } from '@angular/core';

import { UserPostService } from '../user-post.service';
import { Post } from '../post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Post[];

  constructor(private userPostService: UserPostService) { }

  ngOnInit() {
    this.getFeedPosts();
  }

  getFeedPosts(): void {
    this.posts = this.userPostService.getPosts();
  }

}
