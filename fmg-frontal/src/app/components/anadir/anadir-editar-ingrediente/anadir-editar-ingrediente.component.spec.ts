import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirEditarIngredienteComponent } from './anadir-editar-ingrediente.component';

describe('AnadirEditaringredienteComponent', () => {
  let component: AnadirEditarIngredienteComponent;
  let fixture: ComponentFixture<AnadirEditarIngredienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnadirEditarIngredienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnadirEditarIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
