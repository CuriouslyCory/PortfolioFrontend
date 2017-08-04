// angular 2 components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// route components
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CodePhilosophyComponent } from './code-philosophy/code-philosophy.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skills', component:  SkillsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'code-philosophy', component: CodePhilosophyComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    { enableTracing: false }
  )],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
