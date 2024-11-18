import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';//se realiza importaciòn de la lista de usuarios
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.less' 
})
export class AppComponent {
  users= DUMMY_USERS;//añadimos la propiedad users para poder utilzarla en la plantilla
  //title = 'primera-app-angular';
  selectedUserId='u1';

  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedUserId)!;
  }
  onSelectUser(id: string){
    this.selectedUserId=id; 
    console.log('Se ha seleccionado el usuario con el id' + id);
  }
}
