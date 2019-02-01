import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbTagInputModule } from 'ngb-tag-input';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbTagInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
