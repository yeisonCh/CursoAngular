//importamos el decorador de componentes  desde el paquete core de angular
import { Component} from '@angular/core';


@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.components.html',
    styleUrl:'./header.component.less',
  })


export class HeaderComponent{
  
}