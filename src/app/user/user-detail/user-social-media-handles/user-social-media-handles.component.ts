import { Component, Input } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user-social-media-handles',
  templateUrl: './user-social-media-handles.component.html',
  styleUrls: ['./user-social-media-handles.component.scss'],
})
export class UserSocialMediaHandlesComponent {
  @Input() twitterHandle?: string;
  @Input() email?: string;
  @Input() blog?: string;
  link = faLink;
  mail = faEnvelope;
  twitter = faTwitter;
  twitter_url?: string;
  email_url?: string;

  ngOnInit() {
    this.twitter_url = `https://twitter.com/${this.twitterHandle}`;
    this.email_url = `mailto:${this.email}`;
  }
}
