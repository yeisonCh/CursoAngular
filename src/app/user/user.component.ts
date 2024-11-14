import { Component, Input, input } from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';

//const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'

})
export class UserComponent {

  /*
  enfoque decorador para gestionar estados, para este caso es importante importar Input de @angular
  @Input() avatar!: string; // haremos referencia a esta propiedad desde la plantilla app.componet para acceder a la imagen de los usuarios
  @Input() name!: string; //para acceder al campo nombre 
  */
  
//  enfoque en señales para gestionar entradas, para esto importamos funcion input de @angular 
  avatar=input.required<string>();
  name=input.required<string>();
  //creacion de un metodo geter 
  get imagenPath(){
    return 'imagenes/users/'+ this.avatar;
  }
  /* selecteduser=DUMMY_USERS[randomIndex]
   
  
  

  get namePerson(){
    return this.selecteduser.name
  }

 onSelectUser(){
    const randomIndex1=Math.floor(Math.random()*DUMMY_USERS.length)
    this.selecteduser=DUMMY_USERS[randomIndex1]
    
  }*/
}
