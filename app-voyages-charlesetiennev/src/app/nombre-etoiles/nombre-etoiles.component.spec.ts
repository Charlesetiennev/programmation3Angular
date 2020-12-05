import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreEtoilesComponent } from './nombre-etoiles.component';

describe('NombreEtoilesComponent', () => {
  let component: NombreEtoilesComponent;
  let fixture: ComponentFixture<NombreEtoilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreEtoilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreEtoilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
