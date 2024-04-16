export class WishItem {
  public wishText: string;
  public isCompleted?: boolean;

  constructor(wishText: string, isCompleted: boolean = false) {
    this.wishText = wishText;
    this.isCompleted = isCompleted;
  }
}
