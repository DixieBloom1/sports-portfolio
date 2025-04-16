import {Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {QuestionPageComponent} from './question-page/question-page.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'question', component: QuestionPageComponent}
];
