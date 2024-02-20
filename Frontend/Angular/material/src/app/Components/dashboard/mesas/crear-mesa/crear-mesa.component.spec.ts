import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMesaComponent } from './crear-mesa.component';

describe('CrearMesaComponent', () => {
  let component: CrearMesaComponent;
  let fixture: ComponentFixture<CrearMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
