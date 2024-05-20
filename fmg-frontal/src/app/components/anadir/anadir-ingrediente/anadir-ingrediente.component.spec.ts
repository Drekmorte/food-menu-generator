import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirIngredienteComponent } from './anadir-ingrediente.component';

describe('AnadiringredienteComponent', () => {
  let component: AnadirIngredienteComponent;
  let fixture: ComponentFixture<AnadirIngredienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnadirIngredienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnadirIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
