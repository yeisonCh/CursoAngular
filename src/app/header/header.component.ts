//importamos el decorador de componentes  desde el paquete core de angular
import { Component} from '@angular/core';
/* Migraremos los componentes de standalone (autonomos) a modulos  */

@Component({
    selector: 'app-header',
    // standalone: true,  se comenta esta linea o se establece la propiedad en false y debemos tener en cuenta que en app.module.ts 
    //este componente debe estar en el array de declarations
    templateUrl: './header.components.html',
    styleUrl:'./header.component.less',
  })


export class HeaderComponent{
  
}