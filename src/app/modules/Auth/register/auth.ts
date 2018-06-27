export class User {
  id: number;
  email: string;
  password: string;
  surname: string;
  createAt: Date;
  updateAt: Date;

  constructor(id, email, password, surname) {
    this.id = id;
    this.email = email;
    this.password = password ;
    this.surname = surname ;
  }
}
