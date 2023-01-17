import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  users$!: Observable<any[]>;

  constructor(private userSercice: UserService) {}

  mostrarUsuarios() {
    this.users$ = this.userSercice.getUsers(); //Lo asigna a una variable de tipo Observable
  }
}
