// blog-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog'; 
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogs = this.blogService.getAllBlogs();
  }

  edit(blog: Blog): void {
    console.log("Edit blog with id:", blog);
  }

  delete(blog: Blog): void {
    console.log("Delete blog with id:", blog);
  }
}
