import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GreetingComponent } from './greeting/greeting.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SkillsComponent } from './skills/skills.component';
import { SoftwareSkillComponent } from './skills/software-skill/software-skill.component';
import { SkillProgressComponent } from './skill-progress/skill-progress.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';;
import { EducationComponent } from './education/education.component';
import { HttpClientModule } from '@angular/common/http';
import {AnimateModule} from "./animation/animate.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        GreetingComponent,
        SocialMediaComponent,
        SkillsComponent,
        SoftwareSkillComponent,
        SkillProgressComponent,
        FooterComponent,
        ContactComponent,
        EducationComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AnimateModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
