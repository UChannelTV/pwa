import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeolocationService } from "./geolocation.service";
import { DataService } from "./data.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomMaterialModule } from './custom/CustomMaterialModule';

import 'hammerjs';
import { Routes, RouterModule } from "@angular/router";
import { ServiceWorkerModule } from "@angular/service-worker";

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { HomeComponent } from './home/home.component';

const routes : Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule, HttpModule, ServiceWorkerModule,
    BrowserModule, BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
