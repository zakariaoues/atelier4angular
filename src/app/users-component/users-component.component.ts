import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Utilisateur';
import { CalculServiceService } from '../calcul-service.service';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit {
  
  listUsers :Utilisateur[]=[];
  username: string ="";

  constructor(private CalculServiceService:CalculServiceService) { }

  ngOnInit(): void {
    

    this.listUsers = [
      { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
      { id: 2, name: "Ervin Howell", username: "Bret", email: "Shanna@melissa.tv" },
      { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" }
    ];
  }

  searchUser() {
    const count = this.CalculServiceService.getNumberOf(this.listUsers, 'username', this.username);
    alert(`Il y a ${count} utilisateur(s) avec le username "${this.username}"`);
  }
    
  }

