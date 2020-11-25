import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CommonModalComponent } from './common-modal/common-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    CommonModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule
  ],
  providers: [],
  entryComponents: [CommonModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
