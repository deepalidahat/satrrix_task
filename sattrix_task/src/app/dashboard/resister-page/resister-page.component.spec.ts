import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResisterPageComponent } from './resister-page.component';

describe('ResisterPageComponent', () => {
  let component: ResisterPageComponent;
  let fixture: ComponentFixture<ResisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResisterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
