/*
estas importaciones la usamos pra hacer referencia a componentes independientes o autonomos, por lo que al trabajar con Modules
no es necesario y utilizaremos en su lugar otra sintaxis


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(HeaderComponent)
*/

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)