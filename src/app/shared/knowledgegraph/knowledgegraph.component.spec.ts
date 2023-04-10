import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgegraphComponent } from './knowledgegraph.component';

describe('KnowledgegraphComponent', () => {
  let component: KnowledgegraphComponent;
  let fixture: ComponentFixture<KnowledgegraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgegraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
