import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatProgressBarModule, MatProgressSpinnerModule,
  MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatProgressBarModule, MatProgressSpinnerModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatProgressBarModule, MatProgressSpinnerModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
    MatToolbarModule
  ],
})
export class CustomMaterialModule {}
