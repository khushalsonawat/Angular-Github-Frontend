import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-tags',
  templateUrl: './repo-tags.component.html',
  styleUrls: ['./repo-tags.component.scss'],
})
export class RepoTagsComponent {
  @Input() topics?: Array<string>;

  onInit(): void {
    // this.tags = ['javascript', 'angular', 'angularjs', 'Angular2'];
  }
}
