
export class Room {
  _id: string;
  name: string;
  date: Date;
  members: Array<Member>;
}

class Member {
  username: string;
  sessionId: string;
}

