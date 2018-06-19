import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {

  posts = POSTS;

  constructor() {}

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post) {
    this.posts = [post].concat(this.posts);
  }
}
