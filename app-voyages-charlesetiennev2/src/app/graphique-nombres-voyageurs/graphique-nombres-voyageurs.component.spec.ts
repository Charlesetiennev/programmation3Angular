import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiqueNombresVoyageursComponent } from './graphique-nombres-voyageurs.component';

describe('GraphiqueNombresVoyageursComponent', () => {
  let component: GraphiqueNombresVoyageursComponent;
  let fixture: ComponentFixture<GraphiqueNombresVoyageursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiqueNombresVoyageursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiqueNombresVoyageursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
