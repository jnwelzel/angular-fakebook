import { User } from './user';

export class Post {
  id: number;
  user: User;
  text: string;
  timestamp: Date;
}
