import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { repos } from '../repositories/repository';
import { userInfo } from '../user-detail/user';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  constructor(private http: HttpClient) {}

  getUserData(username: string) {
    return this.http.get<userInfo>(`http://localhost:8000/api/${username}/`);
  }

  getRepoData(username: string) {
    return this.http.get<repos[]>(
      `http://localhost:8000/api/${username}/repos/`
    );
  }
}
