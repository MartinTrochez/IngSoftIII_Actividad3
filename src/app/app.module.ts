import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';
import { PostsService } from './posts.service'; 

@NgModule({
  declarations: [
    AppComponent,
    NuevoPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
