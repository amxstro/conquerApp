import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemasUnidadCincoElPage } from './temas-unidad-cinco-el.page';

describe('TemasUnidadCincoElPage', () => {
  let component: TemasUnidadCincoElPage;
  let fixture: ComponentFixture<TemasUnidadCincoElPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasUnidadCincoElPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemasUnidadCincoElPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
