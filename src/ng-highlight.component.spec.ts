import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHighlightComponent } from './ng-highlight.component';

describe('NgHighlightComponent', () => {
  let component: NgHighlightComponent;
  let fixture: ComponentFixture<NgHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
