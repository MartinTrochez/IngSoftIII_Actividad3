// nuevo-post.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '/xampp/htdocs/Actividad-Angular/IngSoftIII_Actividad3/src/app/data.service';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent {
  title: string = '';
  description: string = '';

  @Output() postAdded = new EventEmitter<any>();

  constructor(private dataService: DataService) { }

  addPost(): void {
    if (this.title && this.description) {
      this.dataService.createPost({ title: this.title, body: this.description, userId: 1 }).subscribe((newPost) => {
        this.postAdded.emit(newPost); // Emitir evento con el nuevo post
        this.title = '';
        this.description = '';
      });
    }
  }
}