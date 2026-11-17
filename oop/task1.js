import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook("Clean Code", "Robert Martin", 2008, "PDF");
const ebook2 = new EBook("JavaScript Guide", "John Smith", 2020, "EPUB");

ebook1.printInfo();
ebook2.printInfo();

book1.title = "Harry Potter 1";
console.log(book1.title);

ebook1.format = "MOBI";
console.log(ebook1.format);

const oldest = Book.oldestBook([book1, book2, book3, ebook1]);
console.log("Oldest book:");
oldest.printInfo();

const converted = EBook.fromBook(book2, "PDF");
converted.printInfo();