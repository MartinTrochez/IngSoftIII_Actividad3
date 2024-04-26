import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: any[] = [];
  filteredPosts: any[] = [];
  filterText: any;
  title: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadPosts();
  }

  applyFilter() {
    this.dataService.filterPost(this.filterText).subscribe((data) => {
      this.posts = data;
    })
  }

  clearFilter() {
    this.filterText = ''; 
    this.loadPosts(); 
  }
  

  loadPosts() {
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  addPost() {
    const newPost = { title: 'New Post', body: 'This is a new post.', userId: 1 };
    this.dataService.createPost(newPost).subscribe(() => {
      this.posts.unshift(newPost);
    });
  }

  updatePost(post: any) {
    const updatedPost = { ...post, title: 'Updated Title' };
    this.dataService.updatePost(post.id, updatedPost).subscribe(() => {
      const index = this.posts.findIndex((p) => p.id === post.id);
      this.posts[index] = updatedPost;  // For demonstration, update locally
    });
  }

  deletePost(id: number) {
    this.dataService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
    });
  }
}
