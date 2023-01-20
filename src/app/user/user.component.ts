import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { repos } from './repositories/repository';
import { GetUsersService } from './services/get-users.service';
import { userInfo } from './user-detail/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  repoApiResponse!: repos[];
  userApiData!: userInfo;
  username = '';
  loader = true;
  constructor(
    private userService: GetUsersService,
    private router: ActivatedRoute,
    private routerRedirect: Router
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe(
      (params) => (this.username = params['username'])
    );

    this.userService.getUserData(this.username).subscribe({
      next: (data) => {
        this.userApiData = data;
      },
      error: (err) => {
        this.routerRedirect.navigate(['no/such/repo']);
      },
    });

    this.userService.getRepoData(this.username).subscribe({
      next: (data) => {
        this.repoApiResponse = data;
        this.loader = false;
      },
      error: (err) => {
        this.routerRedirect.navigate(['no/such/user']);
      },
    });
  }
}
