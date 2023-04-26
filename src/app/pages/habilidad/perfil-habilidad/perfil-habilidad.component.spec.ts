import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilHabilidadComponent } from './perfil-habilidad.component';

describe('PerfilHabilidadComponent', () => {
  let component: PerfilHabilidadComponent;
  let fixture: ComponentFixture<PerfilHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
