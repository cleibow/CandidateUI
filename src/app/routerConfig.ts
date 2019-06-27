import { ShowQualificationComponent } from './home/show-qualification/show-qualification.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { CreateQualificationComponent } from './create-qualification/create-qualification.component';

export const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
  {
    path: 'createCandidate',
    component: CreateCandidateComponent
  },
  { path: 'createQualification/:id',
    component: CreateQualificationComponent
  },
  {
    path: 'showQualification/:id',
    component: ShowQualificationComponent

  }
];

