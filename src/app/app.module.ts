import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { CreateQualificationComponent } from './create-qualification/create-qualification.component';
import { FilterComponent } from './home/filter/filter.component';
import { DropdownComponent } from './home/dropdown/dropdown.component';
import { appRoutes } from './routerConfig';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowQualificationComponent } from './home/show-qualification/show-qualification.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateCandidateComponent,
    CreateQualificationComponent,
    FilterComponent,
    DropdownComponent,
    ShowQualificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
