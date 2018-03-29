import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    //DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    //RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
