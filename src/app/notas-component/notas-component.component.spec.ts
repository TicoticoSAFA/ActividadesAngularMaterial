import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasComponentComponent } from './notas-component.component';

describe('NotasComponentComponent', () => {
  let component: NotasComponentComponent;
  let fixture: ComponentFixture<NotasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
