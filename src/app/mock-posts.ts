import { Post } from './post';
import { JESSE_PINKMAN, MR_WHITE } from './mock-users';

export const POSTS: Post[] = [
  { id: 11, user: JESSE_PINKMAN, text: 'You either run from things, or you face them, Mr. White.', timestamp: new Date() },
  { id: 13, user: MR_WHITE, text: 'I am the one who knocks.', timestamp: new Date() },
  { id: 14, user: MR_WHITE,
    text: 'Chemistry is the study of matter, but I prefer to see it as the study of change.', timestamp: new Date() },
  { id: 12, user: JESSE_PINKMAN, text: 'Yeah Mr. White! You really do have a plan! Yeah science!', timestamp: new Date() },
  { id: 15, user: MR_WHITE,
    text: 'If you don\'t know who I am, then maybe your best course would be to tread lightly.', timestamp: new Date() },
];
