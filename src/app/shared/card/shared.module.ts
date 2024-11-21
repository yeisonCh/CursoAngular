import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";

@NgModule({

    declarations:[CardComponent],
    exports:[CardComponent] //lo declaramos aqui para que este disponible en otros modulos que lo requieran
})

export class sharedmodule{

}