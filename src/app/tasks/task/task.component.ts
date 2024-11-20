import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.services';


interface Task{
  id:string,
  userId:string,
  title:string,
  summary:string,
  dueDate:string

}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.less'
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
  //decorador de salida @Output nos sirve para enviar informaciòn a otros componentes.
 // @Output()complete = new EventEmitter<string>(); ya no lo usamos porque lo implementamos desde el servicio
  private tasksService = inject(TasksService)


  onCompleteTask(){

    this.tasksService.removeTask(this.task.id)
    //this.complete.emit(this.task.id);
  }


}
