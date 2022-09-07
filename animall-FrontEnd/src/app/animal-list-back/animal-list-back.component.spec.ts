import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListBackComponent } from './animal-list-back.component';

describe('AnimalListBackComponent', () => {
  let component: AnimalListBackComponent;
  let fixture: ComponentFixture<AnimalListBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalListBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalListBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
