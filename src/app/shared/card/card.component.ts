import { Component } from '@angular/core';
import { NgModule } from "@angular/core";
//import { BrowserModule } from "@angular/platform-browser";

//comentamos las lineas de standalone e imports con el propositos de convertirlo en un compnente basado en modulos

@Component({
  selector: 'app-card',
  //standalone: true,
  //imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.less'
})
export class CardComponent {

}
