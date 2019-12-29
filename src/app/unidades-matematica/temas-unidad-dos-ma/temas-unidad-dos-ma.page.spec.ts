import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemasUnidadDosMaPage } from './temas-unidad-dos-ma.page';

describe('TemasUnidadDosMaPage', () => {
  let component: TemasUnidadDosMaPage;
  let fixture: ComponentFixture<TemasUnidadDosMaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasUnidadDosMaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemasUnidadDosMaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
