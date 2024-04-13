import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-grilla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grilla.component.html',
  styleUrl: './grilla.component.css'
})
export class GrillaComponent implements OnInit {
  posts: any[] = [];
  searchText: string = '';
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private servicioService: ServicioService) {
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.servicioService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  filterPost(searchText: any): void {
    this.servicioService.filterPosts(searchText).subscribe(posts => {
      this.posts = posts;
    })
  }

}
