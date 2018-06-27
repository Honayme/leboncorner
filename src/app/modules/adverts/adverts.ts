export class Adverts {
  id: number;
  userId: string;
  title: string;
  picture: string;
  price: number;
  desc: string;
  zip: number;
  createAt: Date;
  updateAt: Date;

  constructor(id, title, picture, desc, price, zip) {
    this.id = id;
    this.title = title;
    this.picture = picture ;
    this.price = price ;
    this.desc = desc ;
    this.zip = zip ;
  }

}
