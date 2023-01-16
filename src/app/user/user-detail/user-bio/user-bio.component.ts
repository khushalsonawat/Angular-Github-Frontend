import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.scss'],
})
export class UserBioComponent {
  @Input() bio?: string;

  // ngOnInit() {
  //   this.bio = 'Bio goes here';
  // }
}
