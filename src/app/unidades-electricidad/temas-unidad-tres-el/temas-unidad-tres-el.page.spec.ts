import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemasUnidadTresElPage } from './temas-unidad-tres-el.page';

describe('TemasUnidadTresElPage', () => {
  let component: TemasUnidadTresElPage;
  let fixture: ComponentFixture<TemasUnidadTresElPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasUnidadTresElPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemasUnidadTresElPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
