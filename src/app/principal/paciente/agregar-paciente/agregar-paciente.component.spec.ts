import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPacienteComponent } from './agregar-paciente.component';

describe('AgregarPacienteComponent', () => {
  let component: AgregarPacienteComponent;
  let fixture: ComponentFixture<AgregarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
