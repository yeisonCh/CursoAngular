import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';//se realiza importaciòn de la lista de usuarios
import { TasksComponent } from './tasks/tasks.component';
import { NgFor,NgIf } from '@angular/common';// se usa para trabajar con for y el if en versiones anteriorea a angular 17 

@Component({
  selector: 'app-root',
  standalone: true,
  // se debe importar en imports ngForm, ngIf
  //imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor,NgIf],
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.less' 
})
export class AppComponent {
  users= DUMMY_USERS;//añadimos la propiedad users para poder utilzarla en la plantilla
  //title = 'primera-app-angular';
  /*
    selectedUserId='u1'; podemos utilizar esta sentencia para inicializar selectedUserId al usuario de id u1
  */
  selectedUserId?:string; // usamos esta linea para no inicializar selectedUserId, el signo ? para decir que no es requerido inicializarlo y string para decir el tipo de dato que esperamos

  get selectedUser(){
    /*find() metodo de un array para buscar la primera coincidencia 
    
    
    */
    return this.users.find((user)=>user.id === this.selectedUserId)!;
    
  }
  onSelectUser(id: string){
    this.selectedUserId=id; 
    console.log('Se ha seleccionado el usuario con el id' + id);
  }
}
