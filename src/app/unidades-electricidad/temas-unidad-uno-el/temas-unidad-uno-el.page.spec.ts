import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemasUnidadUnoElPage } from './temas-unidad-uno-el.page';

describe('TemasUnidadUnoElPage', () => {
  let component: TemasUnidadUnoElPage;
  let fixture: ComponentFixture<TemasUnidadUnoElPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasUnidadUnoElPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemasUnidadUnoElPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
