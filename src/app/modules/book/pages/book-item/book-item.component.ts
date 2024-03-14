import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.interface';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() book: Book | undefined;
  @Output() edit: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() delete: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() {}

  onEdit(): void {
    this.edit.emit(this.book!);
  }

  onDelete(): void {
    this.delete.emit(this.book!);
  }
}
