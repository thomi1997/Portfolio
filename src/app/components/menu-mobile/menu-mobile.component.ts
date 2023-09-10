import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: [
    './scss/menu-mobile.component.scss',
    './scss/menu-mobile-menu-links.scss',
    './scss/menu-mobile-close.scss',
    './scss/menu-mobile-open.scss'
  ]
})
export class MenuMobileComponent {


  scrollToHeader() {
    this.closeMobileMenu();
    document.getElementById("header").scrollIntoView({
      behavior: "smooth",
    });
  }


  scrollToAboutMe() {
    this.closeMobileMenu();
    document.getElementById("about-me").scrollIntoView({
      behavior: "smooth",
    });
  }


  scrollToSkillsSet() {
    this.closeMobileMenu();
    document.getElementById("skills-set").scrollIntoView({
      behavior: "smooth",
    });
  }


  scrollToMyWork() {
    this.closeMobileMenu();
    document.getElementById("my-work").scrollIntoView({
      behavior: "smooth",
    });
  }


  openMobileMenu() {
    document.getElementById('mobile-menu').classList.add('mobile-menu-open');
    document.getElementById('mobile-menu').classList.remove('mobile-menu-close');
    document.getElementById('mobile-menu').classList.remove('d-none');
    document.getElementById('burger').classList.add('d-none');
    document.getElementById('close').classList.remove('d-none');
  }


  closeMobileMenu() {
    document.getElementById('mobile-menu').classList.remove('mobile-menu-open');
    document.getElementById('mobile-menu').classList.add('mobile-menu-close');
    document.getElementById('burger').classList.remove('d-none');
    document.getElementById('close').classList.add('d-none');
    setTimeout(() => {
      document.getElementById('mobile-menu').classList.add('d-none');
    }, 120);
  }
}
