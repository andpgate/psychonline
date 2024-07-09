import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoPacientesComponent } from './medico-pacientes.component';

describe('MedicoPacientesComponent', () => {
  let component: MedicoPacientesComponent;
  let fixture: ComponentFixture<MedicoPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoPacientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
