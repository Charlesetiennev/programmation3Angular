import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModificationForfaitComponent } from './dialog-modification-forfait.component';

describe('DialogModificationForfaitComponent', () => {
  let component: DialogModificationForfaitComponent;
  let fixture: ComponentFixture<DialogModificationForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModificationForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModificationForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
