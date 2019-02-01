import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbTagInputComponent } from './ngb-tag-input.component';

describe('NgbTagInputComponent', () => {
  let component: NgbTagInputComponent;
  let fixture: ComponentFixture<NgbTagInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbTagInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbTagInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
