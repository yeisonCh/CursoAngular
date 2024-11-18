import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.less'
})
export class TasksComponent {
  @Input({required:true})UserId!:string;
  @Input({required: true}) name!: string; 
  //@Input() name?:string;
  

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Estamos aprendiendo Angular, desde cero.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Realizando todos los ejercicios para obtener experiencia.',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Utilizar git con el fin de practicar lo aprendido en otras clases y adaptarce al entorno de desarrollo profesional',
      dueDate: '2024-06-15',
    },
  ];

get selectedUserTask(){
  return this.tasks.filter((task) => task.userId === this.UserId);
 
}

}
