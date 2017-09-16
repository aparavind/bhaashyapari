import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaashyaPariComponent } from './bhaashya-pari.component';

describe('BhaashyaPariComponent', () => {
  let component: BhaashyaPariComponent;
  let fixture: ComponentFixture<BhaashyaPariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhaashyaPariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhaashyaPariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
