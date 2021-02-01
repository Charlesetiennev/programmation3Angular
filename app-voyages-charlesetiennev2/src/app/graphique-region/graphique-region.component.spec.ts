import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiqueRegionComponent } from './graphique-region.component';

describe('GraphiqueRegionComponent', () => {
  let component: GraphiqueRegionComponent;
  let fixture: ComponentFixture<GraphiqueRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiqueRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiqueRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
