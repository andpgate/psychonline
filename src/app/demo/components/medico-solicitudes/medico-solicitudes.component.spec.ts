import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoSolicitudesComponent } from './medico-solicitudes.component';

describe('MedicoSolicitudesComponent', () => {
  let component: MedicoSolicitudesComponent;
  let fixture: ComponentFixture<MedicoSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoSolicitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicoSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
