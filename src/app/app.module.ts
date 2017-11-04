import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeolocationService } from "./geolocation.service";
import { DataService } from "./data.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
         MatToolbarModule, MatCardModule, MatSlideToggleModule,
         MatSnackBarModule } from "@angular/material";
import 'hammerjs';
import { Routes, RouterModule } from "@angular/router";
import { ServiceWorkerModule } from "@angular/service-worker";

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LiveStreamingComponent } from './live-streaming/live-streaming.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes : Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'live-streaming', component: LiveStreamingComponent },
  { path: 'thank-you', component: ThankYouComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LiveStreamingComponent,
    ThankYouComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule, HttpModule, ServiceWorkerModule,
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule, MatSnackBarModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
