import {ChatMessage} from './ChatMessage';

export class Room {
  _id: string;
  name: string;
  date: Date;
  members: Array<Member>;
  messages: Array<ChatMessage>;
}

class Member {
  username: string;
  sessionId: string;
}

