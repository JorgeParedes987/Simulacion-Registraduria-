import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearResultadoComponent } from './crear-resultado.component';

describe('CrearResultadoComponent', () => {
  let component: CrearResultadoComponent;
  let fixture: ComponentFixture<CrearResultadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearResultadoComponent]
    });
    fixture = TestBed.createComponent(CrearResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
