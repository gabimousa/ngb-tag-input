import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbTagInputComponent } from './ngb-tag-input.component';

@NgModule({
  declarations: [NgbTagInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
  ],
  exports: [NgbTagInputComponent]
})
export class NgbTagInputModule { }
