import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandForfaitComponent } from './grand-forfait.component';

describe('GrandForfaitComponent', () => {
  let component: GrandForfaitComponent;
  let fixture: ComponentFixture<GrandForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
