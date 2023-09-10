import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{


  scrollToAboutMe() {
    document.getElementById("about-me").scrollIntoView({
      behavior: "smooth",
    });
  }


  scrollToSkillsSet() {
    document.getElementById("skills-set").scrollIntoView({
      behavior: "smooth",
    });
  }


  scrollToMyWork() {
    document.getElementById("my-work").scrollIntoView({
      behavior: "smooth",
    });
  }
}
