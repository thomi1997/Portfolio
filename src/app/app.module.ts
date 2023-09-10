import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { PolloLocoComponent } from './components/pollo-loco/pollo-loco.component';
import { JoinComponent } from './components/join/join.component';
import { SimpleCrmComponent } from './components/simple-crm/simple-crm.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    MyWorkComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
    PolloLocoComponent,
    JoinComponent,
    SimpleCrmComponent,
    PokedexComponent,
    MenuMobileComponent,
    ImprintComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    //ReactiveFormsModule
  ],
  providers: [ImprintComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
