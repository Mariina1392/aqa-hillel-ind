import Book from "./Book.js";

class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  get format() {
    return this._format;
  }

  set format(value) {
    if (typeof value !== "string" || !value.trim()) {
      throw new Error("Invalid format");
    }
    this._format = value;
  }

  printInfo() {
    super.printInfo();
    console.log(`Format: ${this.format}`);
  }

  static fromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}

export default EBook;