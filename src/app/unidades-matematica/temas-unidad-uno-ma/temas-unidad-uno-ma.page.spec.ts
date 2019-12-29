import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemasUnidadUnoMaPage } from './temas-unidad-uno-ma.page';

describe('TemasUnidadUnoMaPage', () => {
  let component: TemasUnidadUnoMaPage;
  let fixture: ComponentFixture<TemasUnidadUnoMaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasUnidadUnoMaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemasUnidadUnoMaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
