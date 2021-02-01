import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAjoutForfaitComponent } from './dialog-ajout-forfait.component';

describe('DialogAjoutForfaitComponent', () => {
  let component: DialogAjoutForfaitComponent;
  let fixture: ComponentFixture<DialogAjoutForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAjoutForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAjoutForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
