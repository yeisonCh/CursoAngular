import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle= ''; //signal(''); para trabajar con señales pero es importante tener en cuenta que se deba imnportar signal de @angular/core
  entradaDescrip='';
  entradaFecha=''; 

  onCancel(){
    this.cancel.emit();
  }
  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.entradaDescrip,
      date: this.entradaFecha
    })
  }
}
