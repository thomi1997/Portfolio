import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './scss/footer.component.scss',
    './scss/footer-imprint-link.scss',
    './scss/footer-icons.scss'
  ]
})
export class FooterComponent {


  constructor(private router: Router) {}

  scrollToHeader() {
    document.getElementById("header").scrollIntoView({
      behavior: "smooth",
    });
  }
}
