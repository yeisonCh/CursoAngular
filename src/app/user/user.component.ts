import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';

//const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

/* creando un objeto de tipo usuario al cual le asignamos el mombre usuario
type User={
  id:string;
  avatar:string;
  name:string;
}
*/
interface User{
  id:string;
  avatar:string;
  name:string;
}
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
   
  @Input({required:true}) id!:string;
  @Input({required:true}) avatar!: string; // haremos referencia a esta propiedad desde la plantilla app.componet para acceder a la imagen de los usuarios
  @Input({required:true}) name!: string; //para acceder al campo nombre 
*/
//vamos a utilizar el objeto creado User

@Input({required: true})user!: User;
@Output() select=new EventEmitter();
 
  
/* enfoque en señales para gestionar entradas, para esto importamos funcion input de @angular 
  avatar=input.required<string>();
  name=input.required<string>();
  //creacion de un metodo geter 

imagenPath=computed(()=>{
  return 'imagenes/users/'+ this.avatar();
})
*/

  /*
  metodo get para obtener la imagen usando decoradores */
  get imagenPath(){
    return 'imagenes/users/'+ this.user.avatar;
  }
    
  /* selecteduser=DUMMY_USERS[randomIndex]
   
  
  

  get namePerson(){
    return this.selecteduser.name
  }

 onSelectUser(){
    const randomIndex1=Math.floor(Math.random()*DUMMY_USERS.length)
    this.selecteduser=DUMMY_USERS[randomIndex1]
    
  }*/

    onSelectUser(){
    this.select.emit(this.user.id);
  }
}
