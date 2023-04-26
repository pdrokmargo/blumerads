import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscogeObjetivoComponent } from './escoge-objetivo.component';

describe('EscogeObjetivoComponent', () => {
  let component: EscogeObjetivoComponent;
  let fixture: ComponentFixture<EscogeObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscogeObjetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscogeObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
