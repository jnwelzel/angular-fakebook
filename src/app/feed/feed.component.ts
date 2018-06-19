import { Component, OnInit } from '@angular/core';

import { UserPostService } from '../user-post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(public userPostService: UserPostService) { }

  ngOnInit() {
  }
}
