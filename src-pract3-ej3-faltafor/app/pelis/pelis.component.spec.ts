import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisComponent } from './pelis.component';

describe('PelisComponent', () => {
  let component: PelisComponent;
  let fixture: ComponentFixture<PelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PelisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
