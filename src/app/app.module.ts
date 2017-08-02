import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';

// angular material components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdCardModule,
  MdMenuModule,
  MdInputModule,
  MdButtonModule,
  MdGridListModule,
  MdListModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule,
  MdTooltipModule,
  MdDialogModule,
  MdTabsModule
} from '@angular/material';

// import routing
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {
  CovalentLayoutModule,
  CovalentMenuModule,
  CovalentNotificationsModule,
  CovalentStepsModule
} from '@covalent/core';

import { CovalentHttpModule } from '@covalent/http';

// hammer js is required by some angular components
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    PortfolioComponent,
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentNotificationsModule,
    CovalentStepsModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdToolbarModule,
    MdSidenavModule,
    MdGridListModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
