import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';


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
  @Output()complete = new EventEmitter<string>();


  onCompleteTask(){
    this.complete.emit(this.task.id);
  }


}
