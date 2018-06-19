import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {

  constructor() { }

  getPosts(): Post[] {
    return POSTS;
  }
}
