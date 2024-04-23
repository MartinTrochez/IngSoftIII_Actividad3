// post-form.component.ts
import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  title: string = '';
  description: string = '';

  constructor(private postsService: PostsService) { }

  addPost(): void {
    if (this.title && this.description) {
      this.postsService.addPost(this.title, this.description);
      this.title = '';
      this.description = '';
    }
  }
}