import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoGestionHorarioComponent } from './medico-gestion-horario.component';

describe('MedicoGestionHorarioComponent', () => {
  let component: MedicoGestionHorarioComponent;
  let fixture: ComponentFixture<MedicoGestionHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoGestionHorarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicoGestionHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
