import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteMedicoPerfilComponent } from './paciente-medico-perfil.component';

describe('PacienteMedicoPerfilComponent', () => {
  let component: PacienteMedicoPerfilComponent;
  let fixture: ComponentFixture<PacienteMedicoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteMedicoPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacienteMedicoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
