import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import { JESSE_PINKMAN, MR_WHITE } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of([JESSE_PINKMAN, MR_WHITE]);
  }
}
