export class Room {
  _id:string;
  name:string;
  date:Date;
  members:Array<Member>;
  messages:Array<Message>;
}
class Member {
  username:string;
  sessionId:string;
}
class Message {
  username:string;
  date:Date;
  text:string;
  type:string;
}
