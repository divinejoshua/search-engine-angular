import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineimagesComponent } from './inlineimages.component';

describe('InlineimagesComponent', () => {
  let component: InlineimagesComponent;
  let fixture: ComponentFixture<InlineimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineimagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
