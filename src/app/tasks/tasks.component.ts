import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import {type NewTaskData } from './task/task.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.less'
})
export class TasksComponent {
  @Input({required:true})UserId!:string;
  @Input({required: true}) name!: string; 
  //@Input() name?:string;
  isAddingTask = false;

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
      userId: 'u2',
      title: 'Practicar ejercicios',
      summary: 'Realizando todos los ejercicios para obtener experiencia.',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Implementar git',
      summary:
        'Utilizar git con el fin de practicar lo aprendido en otras clases y adaptarce al entorno de desarrollo profesional',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'implementar nuevas funciones',
      summary:
        'Seguir visualizando los videos relacionados para adquirir nuevos conocimientos',
      dueDate: '2024-07-20',
    },
  ];

  get selectedUserTask(){
    return this.tasks.filter((task) => task.userId === this.UserId);
  
  }

  onCompleteTask(id: string){
    this.tasks=this.tasks.filter((task)=>task.id!==id);
    //console.log("haz hecho click al boton finalizar tarea numero: "+ id);
  }
  onStarAddTask(){
    this.isAddingTask=true;
  }
  onCancelAddTask(){
    this.isAddingTask=false;
  }

  onAddtask(taskData: NewTaskData){
    this.tasks.push({
      id: new Date().getTime.toString(),
      userId: this.UserId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })
    this.isAddingTask=false;
  }
} 