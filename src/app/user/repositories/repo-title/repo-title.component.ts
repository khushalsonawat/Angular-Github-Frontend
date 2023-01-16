import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-title',
  templateUrl: './repo-title.component.html',
  styleUrls: ['./repo-title.component.scss'],
})
export class RepoTitleComponent {
  @Input() title = '';
}
