import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent {
  @Input() image?: string;

  // ngOnInit(){
  //   this.image = 'https://avatars.githubusercontent.com/u/72885226?v=4';
  // }
}
