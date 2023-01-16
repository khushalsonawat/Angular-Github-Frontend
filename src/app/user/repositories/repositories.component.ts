import { Component, Input } from '@angular/core';
import { repos } from './repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent {
  @Input() repoApiResponse!: repos;
}
