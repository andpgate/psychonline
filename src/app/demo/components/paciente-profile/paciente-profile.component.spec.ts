import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteProfileComponent } from './paciente-profile.component';

describe('PacienteProfileComponent', () => {
  let component: PacienteProfileComponent;
  let fixture: ComponentFixture<PacienteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacienteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
