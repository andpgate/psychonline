import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCitasAgendadasComponent } from './paciente-citas-agendadas.component';

describe('PacienteCitasAgendadasComponent', () => {
  let component: PacienteCitasAgendadasComponent;
  let fixture: ComponentFixture<PacienteCitasAgendadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteCitasAgendadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacienteCitasAgendadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
