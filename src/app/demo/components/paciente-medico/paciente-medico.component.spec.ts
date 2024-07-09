import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteMedicoComponent } from './paciente-medico.component';

describe('PacienteMedicoComponent', () => {
  let component: PacienteMedicoComponent;
  let fixture: ComponentFixture<PacienteMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteMedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacienteMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
