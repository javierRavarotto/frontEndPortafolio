import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEstudioComponent } from './perfil-estudio.component';

describe('PerfilEstudioComponent', () => {
  let component: PerfilEstudioComponent;
  let fixture: ComponentFixture<PerfilEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
