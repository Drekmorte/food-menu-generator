import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComidaComponent } from './listar-comida.component';

describe('ListarComidaComponent', () => {
  let component: ListarComidaComponent;
  let fixture: ComponentFixture<ListarComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarComidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
