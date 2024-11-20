import { Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.services';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less'
})
export class NewTaskComponent {
  @Input({required:true})userId!:string;
  @Output() cancel = new EventEmitter<void>(); //
 // @Output() add = new EventEmitter<NewTaskData>(); presindimos de add porque estamos utilizando un servicio que nos lo proporciona 
  enteredTitle= ''; //signal(''); para trabajar con señales pero es importante tener en cuenta que se deba imnportar signal de @angular/core
  entradaDescrip='';
  entradaFecha=''; 
  private tasksServices=inject(TasksService)

  onCancel(){
    this.cancel.emit();
  }
  onSubmit(){
//usamos el servicio creado TasksService para llamar al metodo addTask
    this.tasksServices.addTask({ //es necesario creaar denuevo un objeto de datos de tareas
      title:this.enteredTitle,
      summary:this.entradaDescrip,
      date: this.entradaFecha

    }, this.userId)
    this.cancel.emit()

   /* this.add.emit({      era la forma de enviar el formulario antes de utilizar servicios
      title: this.enteredTitle,
      summary: this.entradaDescrip, 
      date: this.entradaFecha,
    })*/
  }
}
