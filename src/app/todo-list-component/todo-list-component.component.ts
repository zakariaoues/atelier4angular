import { Component, OnInit } from '@angular/core';
import { CalculServiceService } from '../calcul-service.service';
import { Todo } from '../todo';
import { TodoServiceService } from '../todo-service.service';
import { Utilisateur } from '../Utilisateur';
import { UserService } from '../user.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list-component.component.html',
  providers: [CalculServiceService]
})
export class TodoListComponent implements OnInit {
  todolist: Todo[];
  listUser: Utilisateur[];

  completedCount: number;

  constructor(private CalculServiceService: CalculServiceService , private TodoServiceService:TodoServiceService,private UserService:UserService) {

    this.completedCount = 0;
    this.todolist = [];
    this.listUser = [];
  }

  ngOnInit() {
    this.todolist = [
      {"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", "completed": true}
    ];

    this.completedCount = this.CalculServiceService.getNumberOf(this.todolist, 'completed', true);
    this.TodoServiceService.getTodos().subscribe(      
      todos => this.todolist = todos
      );

      this.UserService.getUsers().subscribe((data: Utilisateur[]) => {
        this.listUser = data;
      });

      
  }

  afficherBilan() {
    const total = this.todolist.length;
    const completed = this.CalculServiceService.getNumberOf(this.todolist, 'completed', true);
    const pourcentage = Math.round((completed / total) * 100);
    alert(`Completed count: ${completed} / ${total} (${pourcentage}%)`);
  }
}
