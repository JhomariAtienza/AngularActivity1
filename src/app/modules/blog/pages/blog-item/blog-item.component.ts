import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.css'
})
export class BlogItemComponent {
  @Input() blog: Blog | undefined;
  @Output() edit: EventEmitter<Blog> = new EventEmitter<Blog>();
  @Output() delete: EventEmitter<Blog> = new EventEmitter<Blog>();

  constructor() {}

  onEdit(): void {
    this.edit.emit(this.blog!);
  }

  onDelete(): void {
    this.delete.emit(this.blog!);
}
}
