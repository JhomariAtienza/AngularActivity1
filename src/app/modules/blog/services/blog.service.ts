import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: Blog[] = [
    { id: 1, title: 'First Blog', description: 'Description of the first blog', author: 'John Doe', comments: [] },
    { id: 2, title: 'Second Blog', description: 'Description of the second blog', author: 'Jane Doe', comments: [] }
  ];

  constructor() { }

  getAllBlogs(): Blog[] {
    return this.blogs;
  }
}
