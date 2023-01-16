import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-description',
  templateUrl: './repo-description.component.html',
  styleUrls: ['./repo-description.component.scss'],
})
export class RepoDescriptionComponent {
  @Input() description?: string;
}
