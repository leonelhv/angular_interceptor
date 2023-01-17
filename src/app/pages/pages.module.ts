import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { PostsComponent } from './posts/posts.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, PostsComponent],
  imports: [CommonModule, ComponentsModule, RouterLink],
  exports: [HomeComponent],
})
export class PagesModule {}
