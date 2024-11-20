//creacion de un servico de angular 

import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

/*se registra esta clase o servicio como algo inyectable como una dependencia como la que tenemos aquí
para esto usamos el decorador @Injectable y este asu vez importa Injectable de @angular/core 
este recibe un objeto de configuración y se establece como raiz, ahora ya podemos utilizar el servicio donde lo necesitemos
*/
@Injectable({providedIn:'root'})
//se esporta la clase para poder tener accesos desde otro lugar 
export class TasksService{
    private tasks = [
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

      constructor(){
        const tasks =localStorage.getItem('tasks');

        if(tasks){
            this.tasks=JSON.parse(tasks);
        }
      }

      //para obtener las tareas asignadas a un usuario dependiendo su id 
      gatUserTasks(userId:string){
        return this.tasks.filter((task) => task.userId === userId);
      }

      //metodo para agrear tareas 
      addTask(taskData: NewTaskData, userId:string){
        this.tasks.push({
            id: new Date().getTime.toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
          })
          
          this.saveTask();
      }

      //metodo para eliminar o dar por completada una tarea
      removeTask(id: string){
        this.tasks=this.tasks.filter((task)=>task.id!==id);
        this.saveTask();
      }

      //metodo pra guardar tareas 
      private saveTask(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
}