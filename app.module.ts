import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationComponent } from './notification/notification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HospitalBComponent } from './hospital-b/hospital-b.component';
import { MedicalBComponent } from './medical-b/medical-b.component';
import { SampleTComponent } from './sample-t/sample-t.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    DashboardComponent,
    HospitalBComponent,
    MedicalBComponent,
    SampleTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot([
      {path: 'contact', component: ContactComponent },
    {path: 'notification', component: NotificationComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'hospitalb', component: HospitalBComponent},
    {path: 'medicalb', component: MedicalBComponent}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







