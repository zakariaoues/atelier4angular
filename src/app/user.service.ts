import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private usersUrl = 'assets/users.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.usersUrl);
  }
}
