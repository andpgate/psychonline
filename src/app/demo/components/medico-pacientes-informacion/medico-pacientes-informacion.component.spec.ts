import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoPacientesInformacionComponent } from './medico-pacientes-informacion.component';

describe('MedicoPacientesInformacionComponent', () => {
  let component: MedicoPacientesInformacionComponent;
  let fixture: ComponentFixture<MedicoPacientesInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoPacientesInformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicoPacientesInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
