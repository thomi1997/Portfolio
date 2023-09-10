import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: [
    './scss/about-me.component.scss',
    './scss/about-me-balls.scss',
    './scss/about-me-btn.scss',
    './scss/about-me-content.scss'
  ]
})
export class AboutMeComponent {


  scrollToContactMe() {
    document.getElementById("contact-me").scrollIntoView({
      behavior: "smooth",
    });
  }
}
