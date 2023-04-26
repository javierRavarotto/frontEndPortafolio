import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEstudioComponent } from './detalles-estudio.component';

describe('DetallesEstudioComponent', () => {
  let component: DetallesEstudioComponent;
  let fixture: ComponentFixture<DetallesEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
