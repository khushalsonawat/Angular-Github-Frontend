import { Component, Input } from '@angular/core';
import { userInfo } from './user';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  @Input() userApiResponse!: userInfo;
  github = faGithub;
}
