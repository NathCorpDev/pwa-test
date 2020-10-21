import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'questionnaire',
    component: QuestionnaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
