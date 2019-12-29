import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemasUnidadUnoRoPage } from './temas-unidad-uno-ro.page';

describe('TemasUnidadUnoRoPage', () => {
  let component: TemasUnidadUnoRoPage;
  let fixture: ComponentFixture<TemasUnidadUnoRoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasUnidadUnoRoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemasUnidadUnoRoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
