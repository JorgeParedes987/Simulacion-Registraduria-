import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCandidatoComponent } from './crear-candidato.component';

describe('CrearCandidatoComponent', () => {
  let component: CrearCandidatoComponent;
  let fixture: ComponentFixture<CrearCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCandidatoComponent]
    });
    fixture = TestBed.createComponent(CrearCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
