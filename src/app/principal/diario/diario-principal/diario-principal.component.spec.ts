import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioPrincipalComponent } from './diario-principal.component';

describe('DiarioPrincipalComponent', () => {
  let component: DiarioPrincipalComponent;
  let fixture: ComponentFixture<DiarioPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiarioPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiarioPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
