import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; //se carga BrowserModule para poder uasar algunas caracteristicas usadas en algunos componetes 
// compo los PIPES entre otros 


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponent } from "./tasks/task/task.component";

import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { sharedmodule } from "./shared/card/shared.module";

@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent,
        UserComponent,
        TasksComponent,
        TaskComponent,
        NewTaskComponent,
    ], // se usa para declarar los componente que se utilizaran pero que no son independientes o autonomos 
    bootstrap:[AppComponent],
    //para declarar componentes autonomos usando modulos agregamos el array imports y declaramos dentro todos los componentes autonomos que vamos a utilizar
    imports:[BrowserModule, FormsModule, sharedmodule] // se declara FormsModule para que todos los componentes de la aplicación tengan la funcionalidad de Module
})
export class AppModule{}