// book.service.ts

import { Injectable } from '@angular/core';
import { Book } from '../models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, name: 'Book 1', authors: ['Author 1'], isbn: '1234567890' },
    { id: 2, name: 'Book 2', authors: ['Author 2'], isbn: '0987654321' }
  ];

  constructor() {}

  getBooks(): Book[] {
    return this.books;
  }

  deleteBook(id: number): void {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}
