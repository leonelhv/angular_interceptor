import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts$!: Observable<any[]>;
  user$!: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.posts$ = this.userService.getPosts(id); //Lo asigna a una variable de tipo Observable
    this.user$ = this.userService.getDataUser(id);
  }
}
