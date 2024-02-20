import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarMesasComponent } from './editar-mesas.component';

describe('EditarMesasComponent', () => {
  let component: EditarMesasComponent;
  let fixture: ComponentFixture<EditarMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
