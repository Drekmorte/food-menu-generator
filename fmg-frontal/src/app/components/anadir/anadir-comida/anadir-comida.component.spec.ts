import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirComidaComponent } from './anadir-comida.component';

describe('AnadirComidaComponent', () => {
  let component: AnadirComidaComponent;
  let fixture: ComponentFixture<AnadirComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnadirComidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnadirComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
